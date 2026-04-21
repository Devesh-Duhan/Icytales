"use client";

import { useEffect, useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { uploadProductImageApi } from "@/lib/api";

export default function ProductModal({ isOpen, onClose, onSave, product }) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    price: "",
    category: "",
    stock: 0,
    status: "active",
    images: [],
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        ...product,
        price: product.price.toString().replace("$", ""), // Handle price display
      });
    } else {
      setFormData({
        title: "",
        slug: "",
        description: "",
        price: "",
        category: "",
        stock: 0,
        status: "active",
        images: [],
      });
    }
  }, [product, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Auto-generate slug from title
    if (name === "title" && !product) {
      setFormData((prev) => ({ 
        ...prev, 
        slug: value.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "") 
      }));
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("image", file);

    try {
      const result = await uploadProductImageApi(data);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, result.url],
      }));
    } catch (error) {
      alert("Image upload failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      alert("Error saving product: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-[32px] bg-white shadow-2xl">
        <div className="border-b border-slate-100 p-6 px-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">
            {product ? "Edit Product" : "Add New Product"}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 max-h-[70vh] overflow-y-auto">
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Product Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="e.g. Vanilla Dream"
            />
            <Input
              label="Slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              placeholder="vanilla-dream"
            />
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 p-4 focus:border-[#F83D8E] focus:ring-1 focus:ring-[#F83D8E] outline-none"
                rows="3"
                placeholder="Describe the treat..."
              />
            </div>
            <Input
              label="Price ($)"
              name="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <Input
              label="Stock"
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleChange}
              required
            />
            <Input
              label="Category"
              name="category"
              type="select"
              value={formData.category}
              onChange={handleChange}
              options={[
                { label: "Select Category", value: "" },
                { label: "Ice Cream", value: "Ice Cream" },
                { label: "Gelato", value: "Gelato" },
                { label: "Sorbet", value: "Sorbet" },
                { label: "Frozen Yogurt", value: "Frozen Yogurt" },
              ]}
              required
            />
             <Input
              label="Status"
              name="status"
              type="select"
              value={formData.status}
              onChange={handleChange}
              options={[
                { label: "Active", value: "active" },
                { label: "Inactive", value: "inactive" },
              ]}
              required
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Images</label>
            <div className="flex flex-wrap gap-4 mb-4">
              {formData.images.map((img, i) => (
                <div key={i} className="relative group w-20 h-20 rounded-xl overflow-hidden border border-slate-100">
                  <img src={img} alt="Product" className="w-full h-full object-cover" />
                  <button 
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, images: prev.images.filter((_, idx) => idx !== i) }))}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
              <label className="w-20 h-20 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 hover:border-[#F83D8E] cursor-pointer transition-colors">
                {uploading ? (
                  <div className="w-5 h-5 border-2 border-[#F83D8E] border-t-transparent animate-spin rounded-full" />
                ) : (
                  <>
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-[10px] text-slate-400 mt-1">Add</span>
                  </>
                )}
                <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>
          </div>

          <div className="mt-8 flex gap-4 md:justify-end">
            <Button theme="secondary" type="button" onClick={onClose} width="w-full md:w-32">
              Cancel
            </Button>
            <Button theme="primary" type="submit" loading={loading} width="w-full md:w-40">
              {product ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
