import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({ categories, product, onSave, onChange,errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Görüntüle/Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Ürün Adı"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />

      <SelectInput
        name="categoryId"
        label="Kategori"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map(category => ({
          value: category.id,
          text: category.categoryName
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />

      <TextInput
        name="unitPrice"
        label="Birim Fiyatı"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />


      <TextInput
        name="unitsInStock"
        label="Kalan Stok"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ProductDetail;
