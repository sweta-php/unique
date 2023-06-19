using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using mvcrepo.DAL;
namespace Repositoryproject.Repository


{
       public   interface IStudentRepo
       {
          IEnumerable<tbl_student> GetAll();
          tbl_student GetById(int ID);
           void Insert(tbl_student student);
          void Update(tbl_student student);
          void Delete(int ID);
          void Save();
       }
}
