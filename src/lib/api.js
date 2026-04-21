const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5003";

const handleResponse = async (response) => {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      payload?.message || response.statusText || "API request failed";
    throw new Error(message);
  }
  return payload;
};

const request = async (path, options = {}) => {
  const response = await fetch(`${API_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  return handleResponse(response);
};

export const registerUser = async (payload) => {
  return request("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const loginUser = async (payload) => {
  return request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const logoutUser = async () => {
  return request("/api/auth/logout", {
    method: "POST",
  });
};

export const getProducts = async ({ search, category } = {}) => {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (category) params.append("category", category);
  return request(`/api/products?${params.toString()}`);
};

export const getProductById = async (id) => {
  return request(`/api/products/${id}`);
};

export const createOrder = async (payload) => {
  return request("/api/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const getOrders = async () => {
  return request("/api/orders");
};

export const getUsers = async () => {
  return request("/api/users");
};

export const getAdminOrders = async () => {
  return request("/api/orders");
};

export const updateOrderStatus = async (id, status) => {
  return request(`/api/orders/${id}/status`, {
    method: "PUT",
    body: JSON.stringify({ orderStatus: status }),
  });
};

export const deleteOrder = async (id) => {
  return request(`/api/orders/${id}`, {
    method: "DELETE",
  });
};

export const getAdminProducts = async () => {
  return request("/api/products?all=true");
};

export const createProduct = async (payload) => {
  return request("/api/products", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const updateProduct = async (id, payload) => {
  return request(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
};

export const deleteProduct = async (id) => {
  return request(`/api/products/${id}`, {
    method: "DELETE",
  });
};

export const uploadProductImageApi = async (formData) => {
  const response = await fetch(`${API_URL}/api/products/upload`, {
    method: "POST",
    body: formData,
    // Note: Don't set Content-Type header when using FormData, 
    // it will be set automatically with the boundary string
  });
  return handleResponse(response);
};

export const deleteUser = async (id) => {
  return request(`/api/users/${id}`, {
    method: "DELETE",
  });
};
