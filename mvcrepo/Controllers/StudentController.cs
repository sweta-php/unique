using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using mvcrepo.DAL;
using Repositoryproject.Repository;

namespace Repositoryproject.Controllers
{
    public class StudentController : Controller
    {
        private IStudentRepo studentRepo;

        public StudentController()
        {
            studentRepo = new StudentRepo(new mvc_crudEntities2());
        }

        public ActionResult StudentList()
        {
            var model = studentRepo.GetAll();
            return View(model);
        }

        [HttpGet]
        public ActionResult AddStudent()
        {
            return View();
        }


        [HttpPost]
        public ActionResult AddStudent(tbl_student model)
        {
          
            if (ModelState.IsValid)
            {
                
               studentRepo.Insert(model);
              
               studentRepo.Save();
                
                return RedirectToAction("StudentList");
            }
           
            return View();
        }


        [HttpGet]
        public ActionResult EditStudent(int ID)
        {
           
            tbl_student model = studentRepo.GetById(ID);
          
            return View(model);
        }

        [HttpPost]
        public ActionResult EditStudent(tbl_student model)
        {

            if (ModelState.IsValid)
            {

                studentRepo.Update(model);

                studentRepo.Save();

                return RedirectToAction("StudentList");
            }
            else
            {

                return View(model);
            }
        }
        [HttpGet]
        public ActionResult DeleteStudent(int ID)
        {
           
            tbl_student model = studentRepo.GetById(ID);
           
            return View(model);
        }
       
        [HttpPost]
        public ActionResult Delete(int ID)
        {
            
            studentRepo.Delete(ID);

            studentRepo.Save();
        
            return RedirectToAction("StudentList");
        }
    }
}








