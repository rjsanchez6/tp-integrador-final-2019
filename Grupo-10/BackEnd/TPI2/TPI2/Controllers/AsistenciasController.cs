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
using System.Web.Cors;
using System.Web.Http.Cors;

namespace TPI2.Controllers
{
    [EnableCors(origins:"http://localhost:8000", headers:"*", methods:"*")]
    public class AsistenciasController : ApiController
    {
        private ConexionDBTPI2 db = new ConexionDBTPI2();

        // GET: api/Asistencias
        public IQueryable<Asistencia> GetAsistencia()
        {
            return db.Asistencia;
        }

        // GET: api/Asistencias/5
        [ResponseType(typeof(Asistencia))]
        public IHttpActionResult GetAsistencia(int id)
        {
            Asistencia asistencia = db.Asistencia.Find(id);
            if (asistencia == null)
            {
                return NotFound();
            }

            return Ok(asistencia);
        }

        // PUT: api/Asistencias/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAsistencia(int id, Asistencia asistencia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != asistencia.id)
            {
                return BadRequest();
            }

            db.Entry(asistencia).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AsistenciaExists(id))
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

        // POST: api/Asistencias
        [ResponseType(typeof(Asistencia))]
        public IHttpActionResult PostAsistencia(Asistencia asistencia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Buscar cliente por dni para asociarlo
            if (db.Cliente.Where(x => x.dni == asistencia.dni).Count() > 0)
            {
                asistencia.esCliente = true;
                asistencia.id_cliente = db.Cliente.Where(x => x.dni == asistencia.dni).First().id;
            }
            else
            {
                asistencia.esCliente = false;

            }

            // Buscar producto por nombre para asociarlo
            if (db.ModeloProducto.Where(x => x.nombre == asistencia.modelo).Count() > 0)
            {
                asistencia.id_modelo = db.ModeloProducto.Where(x => x.nombre == asistencia.modelo).First().id;
            }
            else
            {
                asistencia.id_modelo = null;
            }

            db.Asistencia.Add(asistencia);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = asistencia.id }, asistencia);
        }

        // DELETE: api/Asistencias/5
        [ResponseType(typeof(Asistencia))]
        public IHttpActionResult DeleteAsistencia(int id)
        {
            Asistencia asistencia = db.Asistencia.Find(id);
            if (asistencia == null)
            {
                return NotFound();
            }

            db.Asistencia.Remove(asistencia);
            db.SaveChanges();

            return Ok(asistencia);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AsistenciaExists(int id)
        {
            return db.Asistencia.Count(e => e.id == id) > 0;
        }
    }
}