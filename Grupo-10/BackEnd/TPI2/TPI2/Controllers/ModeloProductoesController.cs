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
    public class ModeloProductoesController : ApiController
    {
        private ConexionDBTPI2 db = new ConexionDBTPI2();

        // GET: api/ModeloProductoes
        public IQueryable<ModeloProducto> GetModeloProducto()
        {
            return db.ModeloProducto;
        }

        // GET: api/ModeloProductoes/5
        [ResponseType(typeof(ModeloProducto))]
        public IHttpActionResult GetModeloProducto(int id)
        {
            ModeloProducto modeloProducto = db.ModeloProducto.Find(id);
            if (modeloProducto == null)
            {
                return NotFound();
            }

            return Ok(modeloProducto);
        }

        // PUT: api/ModeloProductoes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutModeloProducto(int id, ModeloProducto modeloProducto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != modeloProducto.id)
            {
                return BadRequest();
            }

            db.Entry(modeloProducto).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModeloProductoExists(id))
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

        // POST: api/ModeloProductoes
        [ResponseType(typeof(ModeloProducto))]
        public IHttpActionResult PostModeloProducto(ModeloProducto modeloProducto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ModeloProducto.Add(modeloProducto);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = modeloProducto.id }, modeloProducto);
        }

        // DELETE: api/ModeloProductoes/5
        [ResponseType(typeof(ModeloProducto))]
        public IHttpActionResult DeleteModeloProducto(int id)
        {
            ModeloProducto modeloProducto = db.ModeloProducto.Find(id);
            if (modeloProducto == null)
            {
                return NotFound();
            }

            db.ModeloProducto.Remove(modeloProducto);
            db.SaveChanges();

            return Ok(modeloProducto);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ModeloProductoExists(int id)
        {
            return db.ModeloProducto.Count(e => e.id == id) > 0;
        }
    }
}