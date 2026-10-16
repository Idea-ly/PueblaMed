"use client";

import { useState, type FormEvent } from "react";
import { IconWhatsApp } from "./Icons";
import { waLink } from "@/lib/site";
import styles from "./VisitForm.module.css";

/** Formulario que arma un mensaje de WhatsApp para agendar visita (sin backend). */
export default function VisitForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Hola, quiero agendar una visita para conocer los consultorios de PueblaMed Atlixco.",
      "",
      `• Nombre: ${f.get("nombre")}`,
      `• Especialidad: ${f.get("especialidad")}`,
      `• Teléfono: ${f.get("telefono")}`,
      f.get("fecha") ? `• Fecha preferida: ${f.get("fecha")}` : "",
      f.get("mensaje") ? `• Comentarios: ${f.get("mensaje")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="card bg-base-100 text-base-content shadow-2xl border border-base-200/50 rounded-3xl" id="visit-form">
      <form className="card-body p-6 sm:p-8 gap-4" onSubmit={onSubmit}>
        <div>
          <span className="badge badge-primary badge-sm font-semibold uppercase tracking-wider mb-2">Visita guiada</span>
          <h3 className="card-title text-2xl font-black text-slate-900 tracking-tight">Agenda tu visita</h3>
          <p className="text-slate-500 text-sm mt-1">Déjanos tus datos y te contactamos de inmediato por WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label pb-1.5" htmlFor="form-nombre">
              <span className="label-text font-medium text-slate-700 text-xs">Nombre completo *</span>
            </label>
            <input
              id="form-nombre"
              name="nombre"
              required
              placeholder="Dra. Ana López"
              autoComplete="name"
              className="input input-bordered w-full rounded-xl bg-slate-50 focus:bg-white transition-all text-sm"
            />
          </div>
          <div className="form-control">
            <label className="label pb-1.5" htmlFor="form-especialidad">
              <span className="label-text font-medium text-slate-700 text-xs">Especialidad médica *</span>
            </label>
            <input
              id="form-especialidad"
              name="especialidad"
              required
              placeholder="Ej. Pediatría, Dermatología"
              className="input input-bordered w-full rounded-xl bg-slate-50 focus:bg-white transition-all text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label pb-1.5" htmlFor="form-telefono">
              <span className="label-text font-medium text-slate-700 text-xs">Teléfono / WhatsApp *</span>
            </label>
            <input
              id="form-telefono"
              name="telefono"
              type="tel"
              required
              placeholder="222 000 0000"
              autoComplete="tel"
              className="input input-bordered w-full rounded-xl bg-slate-50 focus:bg-white transition-all text-sm"
            />
          </div>
          <div className="form-control">
            <label className="label pb-1.5" htmlFor="form-fecha">
              <span className="label-text font-medium text-slate-700 text-xs">Fecha preferida</span>
            </label>
            <input
              id="form-fecha"
              name="fecha"
              type="date"
              className="input input-bordered w-full rounded-xl bg-slate-50 focus:bg-white transition-all text-sm"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label pb-1.5" htmlFor="form-mensaje">
            <span className="label-text font-medium text-slate-700 text-xs">Comentarios o dudas (opcional)</span>
          </label>
          <textarea
            id="form-mensaje"
            name="mensaje"
            rows={3}
            placeholder="Días y horarios en los que te gustaría consultar o conocer el espacio…"
            className="textarea textarea-bordered w-full rounded-xl bg-slate-50 focus:bg-white transition-all text-sm resize-none"
          />
        </div>

        <div className="card-actions mt-2">
          <button
            type="submit"
            className="btn btn-success w-full text-white font-bold text-base rounded-full shadow-lg shadow-emerald-500/25 border-0 hover:scale-[1.01] transition-transform"
            id="form-submit"
          >
            <IconWhatsApp /> Enviar por WhatsApp
          </button>
        </div>

        {sent && (
          <div className="alert alert-success bg-emerald-50 text-emerald-900 border border-emerald-200 mt-2 py-2.5 px-4 rounded-xl flex items-center gap-3 text-sm" role="status">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>¡Listo! Se abrió WhatsApp con tu mensaje listo para enviar.</span>
          </div>
        )}
      </form>
    </div>
  );
}
