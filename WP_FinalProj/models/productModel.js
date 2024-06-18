const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const seedProducts = async () => {
  const products = [
    {
      name: "유 헤이리 네이쳐 바이오워싱 린넨셔츠",
      category: "new top",
      price: "42,900",
      description:
        "셔츠 전문공장에서 제작한 셔츠라\n받으시면 느끼실만큼 고퀄리티의\n셔츠 저희 메인유에서 적극 추천드리고싶네요^^",
      imageUrl: "/img/category_new_img.png",
    },
    {
      name: "유 셀린 하이웨스턴 시어서커 체크 반팔 셔츠",
      category: "best top",
      price: "35,000",
      description:
        "시어서커 소재에 린넨 엠보 가공으로\n돋보이는 쿠션감과 시원한 촉감이 매력적인 셔츠입니다\n S/S시즌 라이트한 착용감을 선사하는\n유니섹스 체크 반팔셔츠 이며",
      imageUrl: "/img/category_best_img.png",
    },
    {
      name: "유 웰 시스루 비치웨어 가디건",
      category: "sale outer",
      price: "51,000-35,900",
      description:
        "여름철까지 쭉 착용할수있는 아크릴소재로 제작\n여름철 휴가철 한개정도는 소장 필요성이 있는 가디건으로\n저희 메인유에서 자신있게 추천드립니다^^",
      imageUrl: "/img/category_sale_img.png",
    },
  ];

  await Product.bulkCreate(products);
  console.log("Initial products added");
};

sequelize
  .sync({ force: true }) // `force: true`는 기존 테이블을 삭제하고 새로 생성. 실제 배포에서는 `force: false`로 설정.
  .then(async () => {
    console.log("Product table created");
    await seedProducts();
  })
  .catch((error) => {
    console.error("Unable to create table:", error);
  });

const createProduct = async (name, category, price, description, imageUrl) => {
  try {
    const user = await Product.create({ name, category, price, description, imageUrl });
    return product;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

const findProductByCategoryt = async (category) => {
  try {
    const product = await Product.findOne({ where: { category } });
    return product;
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};

module.exports = { Product, createProduct, findProductByCategoryt };
