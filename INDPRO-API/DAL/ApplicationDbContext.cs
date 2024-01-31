using System;
using INDPRO_API.Models;
using Microsoft.EntityFrameworkCore;

namespace INDPRO_API.DAL
{
	public class ApplicationDbContext : DbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
		{
		}
		public DbSet<Product> Products { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Setting a primary key in Product model
            modelBuilder.Entity<Product>().HasKey(x => x.Id);

            // Inserting record in Product table
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "First Product",
                    Description = "Sample Desc",
                    Price = 10,
                }
            );
        }
    }
}

