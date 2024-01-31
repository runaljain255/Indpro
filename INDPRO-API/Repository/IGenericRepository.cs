using System;
using INDPRO_API.DAL;

namespace INDPRO_API.Repository
{
	public interface IGenericRepository<TEntity> where TEntity : class, IEntity
	{
        Task<IEnumerable<TEntity>> GetAll();

        Task<TEntity> GetById(int id);

        Task Create(TEntity entity);

        Task Update(int id, TEntity entity);

        Task Delete(int id);
    }
}

