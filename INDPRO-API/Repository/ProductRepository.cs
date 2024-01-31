using System;
using INDPRO_API.DAL;
using INDPRO_API.Models;
using Microsoft.EntityFrameworkCore;

namespace INDPRO_API.Repository
{
	public class ProductRepository : GenericRepository<Product>, IProductRepository
	{
        private readonly ApplicationDbContext _dbcontext;
		public ProductRepository(ApplicationDbContext dbContext)
        : base(dbContext)
		{
            _dbcontext = dbContext;
		}

        public Task<bool> FindProductById(int id)
        {
            return _dbcontext.Products.AnyAsync(e => e.Id == id);
        }
    }
}

