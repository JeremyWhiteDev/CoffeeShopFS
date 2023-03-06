using CoffeeShop.Models;

namespace CoffeeShop.Repositories
{
    public class BeanVarietyRepository : IBeanVarietyRepository
    {

        private readonly string _connectionString;
        public BeanVarietyRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public List<BeanVariety> GetAll()
        {
            return _beanVarieties;
        }

        public BeanVariety Get(int id)
        {
            return _beanVarieties.Find(x => x.Id == id);
        }

        public void Add(BeanVariety variety)
        {
            _beanVarieties.Add(variety);
        }

        public void Update(BeanVariety variety)
        {
            var foundBeanVariety = _beanVarieties.Find(b => b.Id == variety.Id);

            foundBeanVariety = variety;
        }

        public void Delete(int id)
        {
            _beanVarieties.Remove(Get(id));
        }
    }
}