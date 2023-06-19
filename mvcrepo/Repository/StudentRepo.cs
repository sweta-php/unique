using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using mvcrepo.DAL;

using System.Data.Entity;

namespace Repositoryproject.Repository
{
    public class StudentRepo : IStudentRepo
    {


        private readonly mvc_crudEntities2 mvcCrudEntities;
        public StudentRepo()
        { 
      
           mvcCrudEntities = new mvc_crudEntities2();
        }

        public StudentRepo(mvc_crudEntities2 mvc_Crud)
        {
            mvcCrudEntities = mvc_Crud;
        }
      

        public IEnumerable<tbl_student> GetAll()
        {
            return mvcCrudEntities.tbl_student.ToList();
        }

        public tbl_student GetById(int ID)
        {
            return mvcCrudEntities.tbl_student.Find(ID);
        }

        public void Insert(tbl_student student)
        {
            mvcCrudEntities.tbl_student.Add(student);
        }

        public void Update(tbl_student student)
        {
            mvcCrudEntities.Entry(student).State = EntityState.Modified;
        }
        public void Delete(int ID)
        {
           tbl_student student = mvcCrudEntities.tbl_student.Find(ID);
           
            if (student != null)
            {
              
                mvcCrudEntities.tbl_student.Remove(student);
            }
        }
        public void Save()
        {
            mvcCrudEntities.SaveChanges();
        }
    }
}