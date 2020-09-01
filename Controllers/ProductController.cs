using System;
using Microsoft.AspNetCore.Mvc;
using SomeApi.Repsoitory;
using System.Linq;
using System.Collections.Generic;

namespace SomeApi.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IRepository  _productRepository;
        public ProductController(IRepository productRepository)
        {
            this._productRepository = productRepository;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(this._productRepository.GetAll());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return NotFound();
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            this._productRepository.AddProduct(product);
            return Created("/Get/" + product.productId, product);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Product product)
        {
            throw new NotImplementedException();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
