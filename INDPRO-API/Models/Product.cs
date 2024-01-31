using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using INDPRO_API.DAL;
using INDPRO_API.ViewModel;

namespace INDPRO_API.Models
{
	[Table("Product")]
	public class Product : IEntity
	{
		public Product()
		{

		}

		public Product( ProductVM productvm)
		{
			this.Name = productvm.Name;
			this.Price = productvm.Price;
			this.Description = productvm.Description;
		}

		[Key]
		[Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[StringLength(50)]
		[Required]
		public string? Name { get; set; }

		[StringLength(200)]
		public string? Description { get; set; }

		[Required]
		public decimal Price { get; set; }
	}
}

