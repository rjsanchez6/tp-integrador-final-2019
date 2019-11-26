using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TPI2.Models;

namespace TPI2.Controllers
{
    public class CategoriaProductoesController : ApiController
    {
        private ConexionDBTPI2 db = new ConexionDBTPI2();

        // GET: api/CategoriaProductoes
        public IQueryable<CategoriaProducto> GetCategoriaProducto()
        {
            return db.CategoriaProducto;
        }

        // GET: api/CategoriaProductoes/5
        [ResponseType(typeof(CategoriaProducto))]
        public IHttpActionResult GetCategoriaProducto(int id)
        {
            CategoriaProducto categoriaProducto = db.CategoriaProducto.Find(id);
            if (categoriaProducto == null)
            {
                return NotFound();
            }

            return Ok(categoriaProducto);
        }

        // PUT: api/CategoriaProductoes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCategoriaProducto(int id, CategoriaProducto categoriaProducto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != categoriaProducto.id)
            {
                return BadRequest();
            }

            db.Entry(categoriaProducto).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoriaProductoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CategoriaProductoes
        [ResponseType(typeof(CategoriaProducto))]
        public IHttpActionResult PostCategoriaProducto(CategoriaProducto categoriaProducto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CategoriaProducto.Add(categoriaProducto);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = categoriaProducto.id }, categoriaProducto);
        }

        // DELETE: api/CategoriaProductoes/5
        [ResponseType(typeof(CategoriaProducto))]
        public IHttpActionResult DeleteCategoriaProducto(int id)
        {
            CategoriaProducto categoriaProducto = db.CategoriaProducto.Find(id);
            if (categoriaProducto == null)
            {
                return NotFound();
            }

            db.CategoriaProducto.Remove(categoriaProducto);
            db.SaveChanges();

            return Ok(categoriaProducto);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoriaProductoExists(int id)
        {
            return db.CategoriaProducto.Count(e => e.id == id) > 0;
        }
    }
}