using System.Collections.Generic;

namespace SomeApi.Repsoitory
{
    public class ProductRepository : IRepository
    {
        List<Product> products;
        public ProductRepository()
        {
            products = new List<Product>();
            products.Add(new Product() {
                productId =2,
                productName = "Garden Cart",
                description = "15 gallon capacity rolling garden cart",
                price = 32,
                starRating = 3,
                imageUrl = "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            });

            products.Add(
                new Product() {
                productId = 5,
                productName = "Hammer",
                description = "Curved claw steel hammer",
                price = 8,
                starRating = 4,
                imageUrl = "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                }
            );
        }
        public void AddProduct(Product product)
        {
            products.Add(product);
        }

        public void DeleteProduct(int id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Product> GetAll()
        {
           return products;
        }

        public Product GetProduct(int id)
        {
           throw new System.NotImplementedException();
        }

        public void UpdateProduct(Product entity)
        {
            throw new System.NotImplementedException();
        }
    }
}