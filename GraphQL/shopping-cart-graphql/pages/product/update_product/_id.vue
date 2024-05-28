<template>
  <div class="container">
    <div class="update-product-container">
      <h1>Update Product</h1>
      <form class="update-product-form">
        <div class="form-group">
          <label for="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value="Fantastic Rubber Towels"
            required
          />
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" name="price" value="800" required />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" name="description" required>
The Football Is Good For Training And Recreational Purposes</textarea
          >
        </div>
        <div class="form-group">
          <label>Images:</label>
          <div class="images-preview">
            <img
              src="https://api.lorem.space/image/furniture?w=640&h=480&r=5902"
              alt="Product Image 1"
            />
            <img
              src="https://api.lorem.space/image/furniture?w=640&h=480&r=164"
              alt="Product Image 2"
            />
            <img
              src="https://api.lorem.space/image/furniture?w=640&h=480&r=8528"
              alt="Product Image 3"
            />
          </div>
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.update-product-container {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.update-product-container h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.update-product-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical;
  height: 100px;
}

.images-preview {
  display: flex;
  gap: 10px;
}

.images-preview img {
  max-width: 100px;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
