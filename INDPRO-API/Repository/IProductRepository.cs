using System;
using INDPRO_API.Models;

namespace INDPRO_API.Repository
{
	public interface IProductRepository : IGenericRepository<Product>
	{
		Task<bool> FindProductById(int id);
	}
}

