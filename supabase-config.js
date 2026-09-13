/* ═════════ CatálogoYa v2.2 · configuración Supabase ═════════
   ✏️ EDITA SOLO ESTE ARCHIVO para cambiar de proyecto o claves.
   · La clave "anon/publishable" es pública por diseño; la seguridad
     la garantizan las políticas RLS de tu proyecto.
   · NUNCA pegues aquí la clave service_role.                       */

var SB_URL    = 'https://izqoardhwxxmshjnwduh.supabase.co';
var SB_KEY    = 'sb_publishable_Lq5KfOO6ejN3rbJ2cF9AMA_D_tYStZ7';
var SB_HANDLE = 'alma-bazar';   // handle por defecto de la tienda pública (?t=…)

/* Detección de configuración válida + creación del cliente */
var SB_ON = SB_URL.indexOf('PEGAAQUI') === -1 && SB_KEY.indexOf('PEGAAQUI') === -1 && SB_KEY.length > 40;
var sb = null;
try { if (SB_ON && window.supabase) sb = supabase.createClient(SB_URL, SB_KEY); } catch (e) { sb = null; }
SB_ON = !!sb;
