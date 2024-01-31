using System;
using System.ComponentModel.DataAnnotations;
using INDPRO_API.Models;

namespace INDPRO_API.ViewModel
{
	public class ProductVM
	{
		public ProductVM()
		{
		}
        public ProductVM(Product product)
        {
            this.Name = product.Name;
            this.Description = product.Description;
            this.Price = product.Price;
        }

        [StringLength(50)]
        [Required]
        public string? Name { get; set; }

        [StringLength(200)]
        public string? Description { get; set; }

        [Required]
        public decimal Price { get; set; }
    }
}

