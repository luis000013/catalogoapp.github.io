/* ═════════ CatálogoYa v2.2 · lógica de la aplicación ═════════
   Depende de: supabase-config.js (SB_URL, SB_KEY, SB_HANDLE, sb, SB_ON) */

/* ICONOS */
var ICON={
 cart:'<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
 search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
 shirt:'<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
 shoe:'<path d="M3 15v-4a2 2 0 0 1 2-2h4l3 3h6a3 3 0 0 1 3 3v2H3v-2z"/><path d="M9 9l2 2"/><path d="M3 19h18"/>',
 bag:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
 box:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
 receipt:'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1z"/><path d="M8 7h8"/><path d="M8 11h8"/>',
 chart:'<path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16V8"/><path d="M17 16v-3"/>',
 wallet:'<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
 mega:'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8 7 17M17 7l2.8-2.8"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
 x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
 trash:'<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
 edit:'<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
 plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
 print:'<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>',
 cam:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
 truck:'<path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
 bank:'<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
 clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
 chev:'<polyline points="6 9 12 15 18 9"/>',
 grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
 share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
 ig:'<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
 bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
 exit:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',
 eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
 cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'
};
function ic(n,s){return '<svg width="'+(s||18)+'" height="'+(s||18)+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+ICON[n]+'</svg>';}
function icWa(s){return '<svg width="'+(s||18)+'" height="'+(s||18)+'" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';}
function catIcon(c){return c==='Ropa'?'shirt':c==='Calzado'?'shoe':c==='Accesorios'?'bag':'box';}
var SUBCATS={Ropa:['Camisas','Pantalones','Vestidos','Chaquetas','Faldas'],Accesorios:['Aros','Bolsos','Pañuelos','Collares'],Calzado:['Sandalias','Botines','Sneakers','Tacón'],General:['Otros']};

/* TEMA */
function curTheme(){return document.documentElement.getAttribute('data-theme')||'light';}
function toggleTheme(){applyTheme(curTheme()==='dark'?'light':'dark');}
function applyTheme(t){document.documentElement.setAttribute('data-theme',t);LSset('cy2-theme',t);
 var i=ic(t==='dark'?'sun':'moon',18);var a=$('#themeBtn');if(a)a.innerHTML=i;var b=$('#themeBtn2');if(b)b.innerHTML=i;
 if(DB){renderCatalog();if(state.view==='admin')renderAdmin();}
 if(state.sheet)renderSheet();if($('#cartDr').className.indexOf('show')!==-1)renderCart();}
function tileC(p){var d=curTheme()==='dark';return d?{bg:'hsl('+p.hue+',62%,15%)',fg:'hsl('+p.hue+',85%,66%)'}:{bg:'hsl('+p.hue+',70%,92%)',fg:'hsl('+p.hue+',65%,32%)'};}
function tileOpen(p,cls){if(p.image)return '<div class="tile '+(cls||'')+'" style="background-image:url('+p.image+')">';
 var c=tileC(p);return '<div class="tile '+(cls||'')+'" style="background:'+c.bg+'"><span class="tic" style="color:'+c.fg+'">'+ic(catIcon(p.cat),44)+'</span>';}
function swHTML(p){if(p.image)return '<div class="sw" style="background-image:url('+p.image+')"></div>';
 var c=tileC(p);return '<div class="sw" style="background:'+c.bg+';color:'+c.fg+'">'+ic(catIcon(p.cat),20)+'</div>';}

/* STORAGE LOCAL */
function LSget(k){try{return window.localStorage.getItem(k);}catch(e){return null;}}
function LSset(k,v){try{window.localStorage.setItem(k,v);}catch(e){}}
function LSdel(k){try{window.localStorage.removeItem(k);}catch(e){}}
function hpass(s){var h=5381;for(var i=0;i<s.length;i++){h=((h*33)^s.charCodeAt(i))>>>0;}return h.toString(16);}
function DEFSettings(){return {free_threshold:5000,low_stock:3,promo:{min:3000,percent:10},cod_zones:['ZONA_SD'],insta:'',
  shipping:[{id:'local',label:'Local Delivery (SD / Santiago)',price:300,zones:['ZONA_SD','ZONA_CIBAO'],eta:'Mismo día / 24 h'},
   {id:'nacional',label:'Envío Nacional (Caribe Pack / Metropac / Aptpra)',price:350,zones:['ZONA_SD','ZONA_CIBAO','ZONA_ESTE','ZONA_SUR'],eta:'24–72 h'},
   {id:'pickup',label:'Recogida en tienda',price:0,zones:['ZONA_SD','ZONA_CIBAO'],eta:'Horario de tienda'}],
  pickup_points:[{city:'Distrito Nacional',label:'Tienda Alma Bazar — Av. España #1212, Gazcue',hours:'Lun–Sáb 9am–6pm'},{city:'Santiago',label:'Punto Alma — Calle Del Sol #45',hours:'Lun–Vie 10am–5pm'}],
  payments:[{id:'transfer_bpd',type:'transfer',bank:'Banco Popular Dominicano',acct:'Ahorros 796-21458-7',holder:'Alma Bazar SRL',enabled:true},
   {id:'transfer_banreservas',type:'transfer',bank:'Banreservas',acct:'Corriente 001-55875-9',holder:'Alma Bazar SRL',enabled:true},
   {id:'transfer_bhd',type:'transfer',bank:'Banco BHD',acct:'Ahorros 2210-4458-6',holder:'Alma Bazar SRL',enabled:true},
   {id:'qik',type:'transfer',bank:'Qik (BPD)',acct:'Móvil 809-555-0143',holder:'Alma Bazar SRL',enabled:true},
   {id:'cod',type:'cod',bank:'Efectivo contra entrega',enabled:true},
   {id:'card_azul',type:'card',bank:'Tarjeta Crédito/Débito (Azul)',enabled:true},
   {id:'credito',type:'credit',bank:'A crédito (30 días)',enabled:true}]};}
function dAgo(n){var d=new Date();d.setDate(d.getDate()-n);return d.toISOString();}
function DEMO_STORE(){return{
 id:'s-demo',name:'Alma bazar',handle:'alma.bazar',email:'demo@alma.do',passHash:hpass('demo123'),
 bio:'Moda femenina y piezas únicas\nCEO @karolinm23\n✨ Moda femenina y piezas únicas\n📦 Envíos a todo el país\n💳 Transferencias y depósitos\n👉 Haz tu pedido dando clic aquí abajo',logo:'',phone:'18095550143',
 seq:{order:46,receipt:2},settings:DEFSettings(),
 products:[
  {id:'p1',code:'CH-001',subcat:'Chaquetas',name:'Chaqueta denim norte',cat:'Ropa',price:2450,cost:1350,stock:4,hue:215,image:'',desc:'Corte oversize, mezclilla lavada.',sizes:['S','M','L'],colors:[{n:'Azul lavado'},{n:'Negro'}]},
  {id:'p2',code:'VS-014',subcat:'Vestidos',name:'Vestido lino arena',cat:'Ropa',price:1850,cost:1000,stock:2,hue:20,image:'',desc:'Lino fresco, caída suelta.',sizes:['S','M','L'],colors:[{n:'Arena'},{n:'Crudo'}]},
  {id:'p3',code:'PT-021',subcat:'Pantalones',name:'Pantalón wide ruta',cat:'Ropa',price:1600,cost:850,stock:9,hue:150,image:'',desc:'Tiro alto, pierna amplia.',sizes:['34','36','38','40'],colors:[{n:'Negro'},{n:'Oliva'}]},
  {id:'p4',code:'AR-101',subcat:'Aros',name:'Aros terracota',cat:'Accesorios',price:550,cost:240,stock:12,hue:30,image:'',desc:'Arcilla moldeada a mano.',sizes:[],colors:[{n:'Terracota'},{n:'Mostaza'}]},
  {id:'p5',code:'BO-055',subcat:'Bolsos',name:'Bolso tote crudo',cat:'Accesorios',price:1200,cost:480,stock:7,hue:120,image:'',desc:'Fibra natural trenzada.',sizes:[],colors:[{n:'Natural'}]},
  {id:'p6',code:'PA-009',subcat:'Pañuelos',name:'Pañuelo sello',cat:'Accesorios',price:650,cost:300,stock:0,hue:340,image:'',desc:'Estampado exclusivo 70×70.',sizes:[],colors:[{n:'Bosque'}]},
  {id:'p7',code:'BT-300',subcat:'Botines',name:'Botines caminar',cat:'Calzado',price:3200,cost:1900,stock:3,hue:35,image:'',desc:'Cuero vegetal, suela cosida.',sizes:['38','39','40','41'],colors:[{n:'Miel'}]},
  {id:'p8',code:'SD-208',subcat:'Sandalias',name:'Sandalia terracota',cat:'Calzado',price:1650,cost:800,stock:5,hue:330,image:'',desc:'Correas tejidas, acolchadas.',sizes:['36','37','38','39'],colors:[{n:'Arena'},{n:'Salvia'}]}],
 customers:[
  {id:'c1',name:'Camila Rojas',wa:'18095540122',status:'enviado',notes:'Compra aros y pañuelos; tonos tierra.',credit:false},
  {id:'c2',name:'Diego Paredes',wa:'18295512988',status:'pendiente',notes:'Busca botines 42.',credit:false},
  {id:'c3',name:'Fernanda Ruiz',wa:'18493314567',status:'entregado',notes:'Mayorista: totés de 5 en 5.',credit:true},
  {id:'c4',name:'Lucas Vega',wa:'18098123456',status:'entregado',notes:'Debe saldo del pedido RD-0044.',credit:false}],
 orders:[
  {id:'o6',number:'RD-0046',created_at:dAgo(1),customer_name:'Rosario Méndez',customer_phone:'+18095550011',province:'Distrito Nacional',shipping_method:'pickup',shipping_cost:0,address:'',pickup_point:'Tienda Alma Bazar — Av. España #1212, Gazcue',payment_method:'transfer_bpd',payment_status:'pendiente',status:'pendiente',subtotal:2450,discount:0,total:2450,due_date:dAgo(1),wa_sent_at:dAgo(1),items:[{pid:'p1',code:'CH-001',name:'Chaqueta denim norte',variant:{Talla:'M',Color:'Azul lavado'},qty:1,unit_price:2450,cost:1350,line_total:2450}]},
  {id:'o5',number:'RD-0045',created_at:dAgo(3),customer_name:'Camila Rojas',customer_phone:'+18095540122',province:'Distrito Nacional',shipping_method:'local',shipping_cost:300,address:'Calle El Sol #12, Gazcue',pickup_point:'',payment_method:'transfer_bpd',payment_status:'pendiente',status:'enviado',subtotal:1650,discount:0,total:1950,due_date:dAgo(3),wa_sent_at:dAgo(3),items:[{pid:'p8',code:'SD-208',name:'Sandalia terracota',variant:{Talla:'37',Color:'Salvia'},qty:1,unit_price:1650,cost:800,line_total:1650}]},
  {id:'o4',number:'RD-0044',created_at:dAgo(45),customer_name:'Lucas Vega',customer_phone:'+18098123456',province:'Santo Domingo Este',shipping_method:'local',shipping_cost:300,address:'Av. San Vicente #5',pickup_point:'',payment_method:'credito',payment_status:'pendiente',status:'entregado',subtotal:2400,discount:0,total:2700,due_date:dAgo(15),wa_sent_at:dAgo(45),items:[{pid:'p2',code:'VS-014',name:'Vestido lino arena',variant:{Talla:'M',Color:'Arena'},qty:1,unit_price:1850,cost:1000,line_total:1850},{pid:'p4',code:'AR-101',name:'Aros terracota',variant:{Color:'Mostaza'},qty:1,unit_price:550,cost:240,line_total:550}]},
  {id:'o3',number:'RD-0043',created_at:dAgo(12),customer_name:'Fernanda Ruiz',customer_phone:'+18493314567',province:'Santiago',shipping_method:'nacional',shipping_cost:350,address:'Punto Caribe Pack Santiago',pickup_point:'',payment_method:'credito',payment_status:'parcial',status:'entregado',subtotal:6000,discount:0,total:6350,due_date:dAgo(-18),wa_sent_at:dAgo(12),items:[{pid:'p5',code:'BO-055',name:'Bolso tote crudo',variant:{Color:'Natural'},qty:5,unit_price:1200,cost:480,line_total:6000}]},
  {id:'o2',number:'RD-0042',created_at:dAgo(20),customer_name:'Diego Paredes',customer_phone:'+18295512988',province:'Distrito Nacional',shipping_method:'local',shipping_cost:300,address:'Res. Mirador Sur, Ed. 4',pickup_point:'',payment_method:'cod',payment_status:'pagado',status:'entregado',subtotal:3200,discount:0,total:3500,due_date:dAgo(20),wa_sent_at:dAgo(20),items:[{pid:'p7',code:'BT-300',name:'Botines caminar',variant:{Talla:'40',Color:'Miel'},qty:1,unit_price:3200,cost:1900,line_total:3200}]},
  {id:'o1',number:'RD-0041',created_at:dAgo(26),customer_name:'Camila Rojas',customer_phone:'+18095540122',province:'Distrito Nacional',shipping_method:'local',shipping_cost:300,address:'Calle El Sol #12, Gazcue',pickup_point:'',payment_method:'transfer_bpd',payment_status:'pagado',status:'entregado',subtotal:1750,discount:0,total:2050,due_date:dAgo(26),wa_sent_at:dAgo(26),items:[{pid:'p4',code:'AR-101',name:'Aros terracota',variant:{Color:'Terracota'},qty:2,unit_price:550,cost:240,line_total:1100},{pid:'p6',code:'PA-009',name:'Pañuelo sello',variant:{Color:'Bosque'},qty:1,unit_price:650,cost:300,line_total:650}]}],
 payments:[{id:'pay1',order_id:'o1',amount:2050,method:'transfer_bpd',reference:'REF-8841',received_at:dAgo(25)},{id:'pay2',order_id:'o2',amount:3500,method:'cod',reference:'Efectivo entrega',received_at:dAgo(19)},{id:'pay3',order_id:'o3',amount:2000,method:'credito',reference:'Abono',received_at:dAgo(10)}],
 receipts:[{id:'r1',number:'R-0001',order_id:'o1',issued_at:dAgo(25)},{id:'r2',number:'R-0002',order_id:'o2',issued_at:dAgo(19)}],
 reviews:[{pid:'p4',rating:5},{pid:'p7',rating:4},{pid:'p7',rating:5}],
 posts:[],abandoned:[]};}
var STORES=(function(){var r=LSget('cy2-stores');if(r){try{var s=JSON.parse(r);if(s&&typeof s==='object')return s;}catch(e){}}
 return {'s-demo':DEMO_STORE()};})();
function persistStores(){LSset('cy2-stores',JSON.stringify(STORES));}
var DB=null;
function loadSession(){var id=LSget('cy2-session');if(id&&STORES[id]){DB=STORES[id];return true;}DB=null;return false;}
function setSession(id){LSset('cy2-session',id);DB=STORES[id];cart=[];persistCart();}
function logout(){LSdel('cy2-session');DB=null;cart=[];persistCart();renderCartBadge();show('auth');toast('Sesión cerrada','good');}
function persist(){if(DB){STORES[DB.id]=DB;persistStores();}}
var cart=(function(){var r=LSget('cy2-cart');if(r){try{var c=JSON.parse(r);if(c&&c.length!==undefined)return c;}catch(e){}}return [];})();
function persistCart(){LSset('cy2-cart',JSON.stringify(cart));}
var state={view:'auth',cat:'Todo',subcat:'Todo',q:'',sheet:null,sel:{},qty:1,tab:'pedidos',co:null,finPeriod:30,pf:{status:'todos',q:''}};
function storePhone(){return (DB&&DB.phone)||'18095550143';}
function storeUrl(){return 'https://'+((DB&&DB.handle)||'alma.bazar')+'.catya.do';}

/* HELPERS */
function $(s){return document.querySelector(s);}
function esc(s){s=(s===null||s===undefined)?'':String(s);return s.replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function fmt(n){return 'RD$ '+new Intl.NumberFormat('es-DO',{maximumFractionDigits:0}).format(Math.round(n));}
function uid(){return Math.random().toString(36).slice(2,9);}
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');}
function findP(id){if(!DB)return null;for(var i=0;i<DB.products.length;i++)if(DB.products[i].id===id)return DB.products[i];return null;}
function findO(id){for(var i=0;i<DB.orders.length;i++)if(DB.orders[i].id===id)return DB.orders[i];return null;}
function zoneOf(pv){var P=[['Distrito Nacional','ZONA_SD'],['Santo Domingo Este','ZONA_SD'],['Santo Domingo Oeste','ZONA_SD'],['Santo Domingo Norte','ZONA_SD'],['Santiago','ZONA_CIBAO'],['La Vega','ZONA_CIBAO'],['Puerto Plata','ZONA_CIBAO'],['Punta Cana','ZONA_ESTE'],['La Romana','ZONA_ESTE'],['San Pedro de Macorís','ZONA_ESTE'],['San Cristóbal','ZONA_SUR'],['Barahona','ZONA_SUR']];for(var i=0;i<P.length;i++)if(P[i][0]===pv)return P[i][1];return '';}
function fDate(iso){return new Date(iso).toLocaleDateString('es-DO',{day:'2-digit',month:'short'});}
function fDT(iso){var d=new Date(iso);return d.toLocaleDateString('es-DO',{day:'2-digit',month:'2-digit',year:'numeric'})+' · '+d.toLocaleTimeString('es-DO',{hour:'numeric',minute:'2-digit'});}
function stars(r){var f=Math.round(r);return '★★★★★'.slice(0,f)+'☆☆☆☆☆'.slice(0,5-f);}
function ratingOf(pid){var rs=DB.reviews.filter(function(r){return r.pid===pid;});if(!rs.length)return null;var s=0;rs.forEach(function(r){s+=r.rating;});return s/rs.length;}
function payLabel(id){for(var i=0;i<DB.settings.payments.length;i++)if(DB.settings.payments[i].id===id)return DB.settings.payments[i];
 if(id==='credito')return {bank:'A crédito (30 días)',type:'credit'};return {bank:id};}
function shipLabel(id){for(var i=0;i<DB.settings.shipping.length;i++)if(DB.settings.shipping[i].id===id)return DB.settings.shipping[i];return {label:id,price:0};}
function paidOf(oid){var s=0;DB.payments.forEach(function(p){if(p.order_id===oid)s+=p.amount;});return s;}
function balanceOf(o){return Math.max(0,o.total-paidOf(o.id));}
function fileToDataURL(file,max,square,cb){var fr=new FileReader();
 fr.onload=function(){var img=new Image();
  img.onload=function(){var c=document.createElement('canvas'),w=img.width,h=img.height,ctx;
   if(square){var s=Math.min(w,h),sx=(w-s)/2,sy=(h-s)/2;c.width=max;c.height=max;ctx=c.getContext('2d');ctx.drawImage(img,sx,sy,s,s,0,0,max,max);}
   else{var r=Math.min(1,max/Math.max(w,h));c.width=Math.max(1,Math.round(w*r));c.height=Math.max(1,Math.round(h*r));ctx=c.getContext('2d');ctx.drawImage(img,0,0,c.width,c.height);}
   cb(c.toDataURL('image/jpeg',0.82));};
  img.src=fr.result;};
 fr.readAsDataURL(file);}
function dataURLtoFile(dataurl,filename){var arr=dataurl.split(','),mime=(arr[0].match(/:(.*?);/)||[,'image/jpeg'])[1],bstr=atob(arr[1]),n=bstr.length,u8=new Uint8Array(n);
 while(n--){u8[n]=bstr.charCodeAt(n);}return new File([u8],filename,{type:mime});}
function downloadData(d,name){if(!d)return;var a=document.createElement('a');a.href=d;a.download=name||'imagen.jpg';document.body.appendChild(a);a.click();a.remove();}
function shareFiles(text,images){var files=[];(images||[]).forEach(function(d,i){if(d){try{files.push(dataURLtoFile(d,'img-'+(i+1)+'.jpg'));}catch(e){}}});
 try{
  if(files.length&&navigator.canShare&&navigator.canShare({files:files})){navigator.share({files:files,text:text,title:'CatálogoYa'}).catch(function(){});return true;}
  if(!files.length&&navigator.share){navigator.share({text:text,title:'CatálogoYa'}).catch(function(){});return true;}
 }catch(e){}
 return false;}
function shareStore(){var u=storeUrl()+'?t='+DB.handle;
 if(navigator.share){navigator.share({title:DB.name,url:u}).catch(function(){});}else copyText(u);}
function openWaText(text,phone){window.open('https://wa.me/'+(phone||storePhone())+'?text='+encodeURIComponent(text),'_blank');}
function copyText(t){function fb(){var ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);toast('Copiado ✔','good');}
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){toast('Copiado ✔','good');},fb);}else fb();}
function toast(msg,tone,actLabel,cb){var t=document.createElement('div');t.className='toast '+(tone||'');t.textContent=msg;
 if(actLabel){var b=document.createElement('button');b.textContent=actLabel;b.onclick=function(){t.remove();if(cb)cb();};t.appendChild(b);}
 $('#toasts').appendChild(t);setTimeout(function(){t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(function(){t.remove();},300);},3400);}
var confirmCb=null;
function askConfirm(msg,cb){confirmCb=cb;openModal('<h3 style="font-size:18px;font-weight:700;margin-bottom:10px">Confirmar</h3><p style="font-size:14px;line-height:1.5;margin-bottom:18px;color:var(--text2)">'+esc(msg)+'</p><div><button class="btn btn-primary" onclick="doConfirm()">Sí, continuar</button><button class="btn btn-outline" onclick="closeModal()">Cancelar</button></div>');}
function doConfirm(){var cb=confirmCb;closeModal();if(cb)cb();}
function openModal(html){$('#modalSlot').innerHTML='<div class="modal" style="pointer-events:auto">'+html+'</div>';$('#modalBk').className='bk show';}
function closeModal(){confirmCb=null;$('#modalSlot').innerHTML='';$('#modalBk').className='bk';}
function toggleShipDetails(){var b=$('#shipDetails');if(b)b.classList.toggle('open');}

/* AUTH */
function authTab(t){$('#authTabLogin').className='chip '+(t==='login'?'on':'');$('#authTabReg').className='chip '+(t==='reg'?'on':'');
 $('#authLogin').style.display=t==='login'?'block':'none';$('#authReg').style.display=t==='reg'?'block':'none';}
function autoHandle(v){$('#rgHandle').value=slug(v);}
function doLogin(){var e=$('#liEmail').value.trim().toLowerCase(),p=$('#liPass').value;$('#liErr').textContent='';
 var found=null;Object.keys(STORES).forEach(function(k){if(STORES[k].email===e)found=STORES[k];});
 if(!found||found.passHash!==hpass(p)){$('#liErr').textContent='Email o contraseña incorrectos.';return;}
 setSession(found.id);enterApp();toast('Bienvenida/o de vuelta, '+found.name+' ✔','good');}
function loginDemo(){setSession('s-demo');enterApp();}
function doRegister(){var n=$('#rgName').value.trim(),h=slug($('#rgHandle').value||$('#rgName').value),e=$('#rgEmail').value.trim().toLowerCase(),p=$('#rgPass').value;$('#rgErr').textContent='';
 if(n.length<2)return $('#rgErr').textContent='Escribe el nombre de tu tienda.';
 if(!/^[^@]+@[^@]+\.[^@]+$/.test(e))return $('#rgErr').textContent='Email inválido.';
 if(p.length<6)return $('#rgErr').textContent='Contraseña mínimo 6 caracteres.';
 var dup=false;Object.keys(STORES).forEach(function(k){if(STORES[k].email===e)dup=true;});
 if(dup)return $('#rgErr').textContent='Ya existe una tienda con ese email.';
 var s={id:uid(),name:n,handle:h||slug(n),email:e,passHash:hpass(p),bio:'',logo:'',phone:'',seq:{order:0,receipt:0},settings:DEFSettings(),
  products:[],customers:[],orders:[],payments:[],receipts:[],reviews:[],posts:[],abandoned:[]};
 STORES[s.id]=s;persistStores();setSession(s.id);enterApp();
 toast('🎉 Tienda "'+n+'" creada. Agrega tu primer producto.','good');setTimeout(function(){openAdmin();state.tab='inventario';renderAdmin();openProd();},600);}
function enterApp(){applyTheme(curTheme());renderCartBadge();show('tienda');}

/* CARRITO */
function vkey(v){var ks=Object.keys(v).sort(),out=[];ks.forEach(function(k){out.push(k+'='+v[k]);});return out.join('|');}
function addToCart(pid,variant,qty){var p=findP(pid);if(!p||p.stock<=0)return;var key=vkey(variant),found=null;
 cart.forEach(function(l){if(l.pid===pid&&l.vkey===key)found=l;});
 if(found)found.qty=Math.min(p.stock,found.qty+qty);else cart.push({pid:pid,variant:variant,vkey:key,qty:Math.min(p.stock,qty)});
 persistCart();renderCartBadge();toast('Agregado: '+p.name,'good');openCart();}
function cartCalc(){var lines=[],sub=0;cart.forEach(function(l){var p=findP(l.pid);if(!p)return;var lt=p.price*l.qty;sub+=lt;lines.push({l:l,p:p,lt:lt});});
 var disc=0;if(sub>=DB.settings.promo.min)disc=Math.round(sub*DB.settings.promo.percent/100);return {lines:lines,subtotal:sub,discount:disc,net:sub-disc};}
function renderCartBadge(){var n=0;cart.forEach(function(l){n+=l.qty;});var t='RD$ 0';
 if(DB){t=fmt(cartCalc().net);}$('#fabCart').innerHTML=ic('cart',18)+'<span>'+t+' · '+n+'</span>';}
function openCart(){$('#cartBk').className='bk show';$('#cartDr').className='drawer show';renderCart();}
function closeCart(){$('#cartBk').className='bk';$('#cartDr').className='drawer';}
function availabilityMessage(){var c=cartCalc();var L=[];
 L.push('*Consulta de disponibilidad — '+DB.name+'*');
 L.push('¡Hola! Me interesan los artículos de las fotos. ¿Tienen disponibilidad para entrega o envío inmediato?');
 L.push('');
 c.lines.forEach(function(x){var v=Object.keys(x.l.variant).map(function(k){return x.l.variant[k];}).join(' · ');
  L.push('• '+x.p.name+(v?' · '+v:'')+' — '+fmt(x.p.price)+(x.p.stock<=0?' — ⛔ Agotado':''));});
 L.push('');
 L.push('🧺 Total estimado: *'+fmt(c.net)+'*');
 L.push('Opciones:');
 L.push('Completa la compra aquí → '+storeUrl()+'?t='+DB.handle);
 L.push('¡Quedo a la espera de su confirmación! Muchas gracias.');
 return L.join('\n');}
function confirmAvailability(){if(!cart.length)return toast('Tu carrito está vacío','warn');
 var c=cartCalc(),msg=availabilityMessage();
 var imgs=c.lines.map(function(x){return x.p.image;});
 if(shareFiles(msg,imgs)){toast('Abriendo WhatsApp con las fotos del carrito…','good');}
 else{openWaText(msg);toast(imgs.some(function(i){return i;})?'Tu dispositivo no adjunta fotos solo: se abrió el chat con el detalle para que las adjuntes':'Chat abierto con la consulta','warn');}}
function renderCart(){var c=cartCalc();
 $('#cartHd').innerHTML='<div style="display:flex;align-items:center"><b style="font-size:18px;font-weight:700;flex:1">Tu carrito</b><button class="icon-btn" onclick="closeCart()">'+ic('x',18)+'</button></div>';
 if(!c.lines.length){$('#cartBd').innerHTML='<p style="text-align:center;color:var(--text2);padding:50px 0">Tu carrito está vacío.</p>';$('#cartFt').innerHTML='';return;}
 var rem=DB.settings.free_threshold-c.subtotal;
 $('#cartBd').innerHTML='<div style="font-size:13px;font-weight:700;color:'+(rem>0?'var(--amber)':'var(--ok)')+'">'+(rem>0?'🚚 Agrega '+fmt(rem)+' más para envío gratis en Santo Domingo':'🎉 ¡Envío gratis en Santo Domingo!')+'</div><div class="meter"><i style="width:'+Math.min(100,Math.round(c.subtotal/DB.settings.free_threshold*100))+'%"></i></div>'+
 c.lines.map(function(x,i){return '<div class="cline">'+swHTML(x.p)+'<div class="row-main" style="min-width:100px"><b style="font-size:14px">'+esc(x.p.name)+'</b><small>'+esc(Object.keys(x.l.variant).map(function(k){return x.l.variant[k];}).join(' · '))+' · '+fmt(x.p.price)+'</small></div>'+
  '<div class="stepper"><button onclick="setQty('+i+','+(x.l.qty-1)+')">−</button><span>'+x.l.qty+'</span><button onclick="setQty('+i+','+(x.l.qty+1)+')">+</button></div>'+
  '<b style="min-width:66px;text-align:right;font-size:14px">'+fmt(x.lt)+'</b><button class="icon-btn" onclick="removeLine('+i+')">'+ic('trash',16)+'</button></div>';}).join('');
 var dsc=c.discount>0?'<div style="display:flex;justify-content:space-between;font-size:13px;color:var(--ok);font-weight:700;margin-top:8px"><span>Promo ('+DB.settings.promo.percent+'%)</span><span>−'+fmt(c.discount)+'</span></div>':'';
 $('#cartFt').innerHTML='<div style="display:flex;justify-content:space-between;font-size:13px;color:var(--text2)"><span>Subtotal</span><span>'+fmt(c.subtotal)+'</span></div>'+dsc+
  '<div style="display:flex;justify-content:space-between;font-weight:800;font-size:18px;margin:8px 0 14px"><span>Total</span><span>'+fmt(c.net)+'</span></div>'+
  '<button class="btn btn-wa" style="width:100%;margin-bottom:10px" onclick="confirmAvailability()">'+icWa(17)+'Confirmar disponibilidad del pedido</button>'+
  '<button class="btn btn-primary" style="width:100%" onclick="openCheckout()">Continuar pedido →</button>';}
function setQty(i,q){if(q<=0){removeLine(i);return;}var p=findP(cart[i].pid);cart[i].qty=Math.min(p?p.stock:99,q);persistCart();renderCartBadge();renderCart();}
var lastRemoved=null;
function removeLine(i){lastRemoved={line:cart[i],i:i};cart.splice(i,1);persistCart();renderCartBadge();renderCart();
 toast('Artículo removido','warn','DESHACER',function(){cart.splice(lastRemoved.i,0,lastRemoved.line);persistCart();renderCartBadge();renderCart();});}

/* CATÁLOGO + HERO */
function cats(){var seen={},out=['Todo'];DB.products.forEach(function(p){if(!seen[p.cat]){seen[p.cat]=1;out.push(p.cat);}});return out;}
function renderStoreHead(){
 var ini=DB.name.slice(0,2).toUpperCase();
 var logoHtml=DB.logo?'<img src="'+DB.logo+'" alt="">':esc(ini);
 var bioLines=(DB.bio||'').split('\n').filter(function(l){return l.trim();});
 var tag=(bioLines[0]||'Moda y piezas únicas')+' · @'+DB.handle+' · Santo Domingo, RD';
 var rest=bioLines.slice(1).join('\n');
 var owner=!DB._anon;
 var shipLines=DB.settings.shipping.map(function(m){return '<div class="dline"><b>'+esc(m.label)+'</b><span>'+(m.price?fmt(m.price):'GRATIS')+' · '+esc(m.eta)+'</span></div>';}).join('');
 var payLines=DB.settings.payments.filter(function(p){return p.enabled;}).map(function(p){return '<div class="dline"><b>'+esc(p.bank)+'</b><span>'+(p.type==='transfer'?esc(p.acct):'')+'</span></div>';}).join('');
 $('#storeHead').innerHTML=
  '<div class="topright">'+
   (owner?'<button class="btn btn-outline" onclick="state.tab=\'config\';openAdmin()">'+ic('cam',16)+'Editar</button>':'')+
   '<button class="circle-btn" id="themeBtn" onclick="toggleTheme()"></button>'+
  '</div>'+
  '<div class="avatar">'+logoHtml+'<span class="odot"></span></div>'+
  '<div class="hero-name"><h1>'+esc(DB.name)+'</h1><span class="oficial">Oficial</span></div>'+
  '<div class="hero-tag">'+esc(tag)+'</div>'+
  (rest?'<div class="biocard">'+esc(rest)+'</div>':'')+
  '<div class="hero-actions">'+
   '<a class="wa-big" href="https://wa.me/'+storePhone()+'?text='+encodeURIComponent('Hola 👋 vengo del catálogo de '+DB.name)+'" target="_blank" rel="noopener noreferrer">'+icWa(22)+'WhatsApp</a>'+
   (DB.settings.insta?'<a class="sq-social" href="https://instagram.com/'+esc(String(DB.settings.insta).replace('@',''))+'" target="_blank" rel="noopener noreferrer">'+ic('ig',24)+'</a>':'')+
   '<button class="sq-social" onclick="shareStore()">'+ic('share',22)+'</button>'+
  '</div>'+
  '<div class="features">'+
   '<div class="feature">'+ic('truck',22)+'Envíos nacionales</div>'+
   '<div class="feature">'+ic('bank',22)+'Transf. bancario</div>'+
   '<div class="feature green">'+ic('clock',22)+'Stock en vivo</div>'+
  '</div>'+
  '<button class="details-toggle" onclick="toggleShipDetails()">Ver detalles de envío y pago '+ic('chev',18)+'</button>'+
  '<div class="details-box" id="shipDetails">'+shipLines+payLines+'</div>';
 var tb=$('#themeBtn');if(tb)tb.innerHTML=ic(curTheme()==='dark'?'sun':'moon',18);}
function renderCatalog(){if(!DB)return;renderStoreHead();
 $('#chips').innerHTML='<button class="chip '+(state.cat==='Todo'?'on':'')+'" onclick="setCat(\'Todo\')">'+ic('grid',16)+'Todos</button>'+
  cats().filter(function(c){return c!=='Todo';}).map(function(c){return '<button class="chip '+(state.cat===c?'on':'')+'" onclick="setCat(\''+c+'\')">'+ic(catIcon(c),16)+esc(c)+'</button>';}).join('');
 var subs=[];if(state.cat!=='Todo'){var seen={};DB.products.forEach(function(p){if(p.cat===state.cat&&p.subcat&&!seen[p.subcat]){seen[p.subcat]=1;subs.push(p.subcat);}});}
 $('#subchips').innerHTML=subs.length?'<button class="chip '+(state.subcat==='Todo'?'on':'')+'" onclick="state.subcat=\'Todo\';renderCatalog()">Todo</button>'+subs.map(function(s){return '<button class="chip '+(state.subcat===s?'on':'')+'" onclick="state.subcat=\''+esc(s)+'\';renderCatalog()">'+esc(s)+'</button>';}).join(''):'';
 var q=state.q.toLowerCase();
 var list=DB.products.filter(function(p){return (state.cat==='Todo'||p.cat===state.cat)&&(state.subcat==='Todo'||p.subcat===state.subcat)&&((p.name+(p.code||'')).toLowerCase().indexOf(q)!==-1);});
 $('#grid').innerHTML=list.length?list.map(function(p,i){var sold=p.stock<=0,low=p.stock>0&&p.stock<=DB.settings.low_stock,r=ratingOf(p.id);
  return '<button class="pcard" style="animation-delay:'+(i*40)+'ms" onclick="openSheet(\''+p.id+'\')">'+
   tileOpen(p,sold?'sold':'')+
   (sold?'<span class="tb out">Agotado</span>':low?'<span class="tb low">Últimas '+p.stock+'</span>':'<span class="tb disp">'+p.stock+' disp.</span>')+
   (r?'<span class="tb star">'+stars(r)+'</span>':'')+'</div>'+
   '<div class="pinfo"><span class="psub">'+esc(p.cat)+(p.subcat?' · '+esc(p.subcat):'')+'</span><div class="pname">'+esc(p.name)+'</div><div class="pprice">'+fmt(p.price)+'</div>'+(p.code?'<div class="pcode">'+esc(p.code)+'</div>':'')+'</div></button>';}).join('')
  :'<div style="grid-column:1/-1;text-align:center;padding:50px 0;color:var(--text2)">'+(DB.products.length?'Nada por aquí… prueba otra búsqueda.':'Aún no hay productos.<br><br><button class="btn btn-primary" onclick="openAdmin();state.tab=\'inventario\';renderAdmin();openProd()">'+ic('plus',16)+'Crear mi primer producto</button>')+'</div>';}
function setCat(c){state.cat=c;state.subcat='Todo';renderCatalog();}
function openSheet(pid){var p=findP(pid);if(!p)return;state.sheet=p;state.sel={};state.qty=1;
 if(p.sizes.length)state.sel['Talla']=p.sizes[0];if(p.colors.length)state.sel['Color']=p.colors[0].n;
 $('#sheetBk').className='bk show';$('#sheetDr').className='drawer show';renderSheet();}
function closeSheet(){$('#sheetBk').className='bk';$('#sheetDr').className='drawer';state.sheet=null;}
function renderSheet(){var p=state.sheet;if(!p)return;var sold=p.stock<=0;
 var wa='https://wa.me/'+storePhone()+'?text='+encodeURIComponent('Hola 👋 Vi *'+p.name+'*'+(p.code?' ('+p.code+')':'')+' a '+fmt(p.price)+' en tu catálogo. ¿Está disponible? '+storeUrl()+'/p/'+p.id);
 $('#sheetBd').innerHTML='<div style="display:flex;align-items:center;margin-bottom:12px"><b style="font-size:18px;font-weight:700;flex:1">'+esc(p.name)+'</b><button class="icon-btn" onclick="closeSheet()">'+ic('x',18)+'</button></div>'+
  '<div style="border-radius:16px;overflow:hidden">'+tileOpen(p,sold?'sold':'')+(sold?'<span class="tb out">Agotado</span>':'')+'</div></div>'+
  '<p style="font-size:13px;color:var(--text2);margin:12px 0 6px">'+esc(p.cat)+(p.subcat?' · '+esc(p.subcat):'')+(p.code?' · Cód. '+esc(p.code):'')+'</p>'+
  '<p style="font-size:14px;color:var(--text2);margin-bottom:8px">'+esc(p.desc)+'</p><div class="pprice" style="margin-bottom:10px;font-size:20px">'+fmt(p.price)+'</div>'+
  (p.sizes.length?'<div class="field"><label>Talla</label><div class="chips">'+p.sizes.map(function(s){return '<button class="chip '+(state.sel['Talla']===s?'on':'')+'" onclick="state.sel[\'Talla\']=\''+s+'\';renderSheet()">'+s+'</button>';}).join('')+'</div></div>':'')+
  (p.colors.length?'<div class="field"><label>Color</label><div class="chips">'+p.colors.map(function(c){return '<button class="chip '+(state.sel['Color']===c.n?'on':'')+'" onclick="state.sel[\'Color\']=\''+esc(c.n)+'\';renderSheet()">'+esc(c.n)+'</button>';}).join('')+'</div></div>':'')+
  '<div class="field"><label>Cantidad</label><div class="stepper" style="display:inline-flex"><button onclick="state.qty=Math.max(1,state.qty-1);renderSheet()">−</button><span>'+state.qty+'</span><button onclick="state.qty=Math.min('+Math.max(1,p.stock)+',state.qty+1);renderSheet()">+</button></div> <span style="font-size:12px;color:var(--text2)">'+(sold?'sin stock':p.stock+' disponibles')+'</span></div>'+
  (sold?'<button class="btn btn-outline" disabled style="width:100%">Agotado — vuelve pronto</button>'
   :'<button class="btn btn-primary" style="width:100%" onclick="addToCart(\''+p.id+'\',state.sel,state.qty);closeSheet()">'+ic('cart',17)+'Agregar · '+fmt(p.price*state.qty)+'</button>'+
    '<a class="btn btn-wa" style="width:100%;margin-top:10px" href="'+wa+'" target="_blank" rel="noopener noreferrer">'+icWa(17)+'Preguntar por WhatsApp</a>');}

/* CHECKOUT */
var PROVINCES_LIST=['Distrito Nacional','Santo Domingo Este','Santo Domingo Oeste','Santo Domingo Norte','Santiago','La Vega','Puerto Plata','Punta Cana','La Romana','San Pedro de Macorís','San Cristóbal','Barahona'];
function openCheckout(){if(!cart.length){toast('Tu carrito está vacío','warn');return;}closeCart();
 state.co={step:1,name:'',prefix:'809',phone:'',province:'',shipId:'',address:'',pickupId:'',notes:'',payId:'',bankId:''};
 show('checkout');renderCheckout();}
function show(v){state.view=v;['auth','tienda','checkout','confirm','admin'].forEach(function(k){$('#v-'+k).style.display=(k===v)?'block':'none';});
 $('#bottomBar').style.display=(v==='tienda')?'flex':'none';
 if(v==='tienda')renderCatalog();window.scrollTo(0,0);}
function goTienda(){show('tienda');}
function shipOptions(){var z=zoneOf(state.co.province);return DB.settings.shipping.filter(function(m){if(!state.co.province)return true;
 if(m.id==='pickup')return DB.settings.pickup_points.some(function(pt){return pt.city===state.co.province;});return m.zones.indexOf(z)!==-1;});}
function renderCheckout(){var co=state.co;
 $('#steps').innerHTML='<span class="stepdot '+(co.step>1?'done':'on')+'">1</span><span class="steplab">Entrega</span><span class="stepdot '+(co.step>1?'on':'')+'">2</span><span class="steplab">Pago</span>';
 if(co.step===1){var opts=shipOptions();
  $('#coBody').innerHTML=
   '<div class="fgrid"><div class="field"><label>Nombre y apellido *</label><input class="inp" value="'+esc(co.name)+'" placeholder="María Pérez" oninput="state.co.name=this.value"></div>'+
   '<div class="field"><label>Teléfono *</label><div style="display:flex;gap:8px"><select class="inp" style="width:110px" onchange="state.co.prefix=this.value"><option value="809">+1 809</option><option value="829">+1 829</option><option value="849">+1 849</option></select><input class="inp" type="tel" maxlength="7" value="'+esc(co.phone)+'" placeholder="555-0143" oninput="this.value=this.value.replace(/\\D/g,\'\');state.co.phone=this.value"></div></div></div>'+
   '<div class="field"><label>Provincia / Zona *</label><select class="inp" onchange="state.co.province=this.value;state.co.shipId=\'\';renderCheckout()"><option value="">Selecciona…</option>'+PROVINCES_LIST.map(function(p){return '<option '+(co.province===p?'selected':'')+'>'+p+'</option>';}).join('')+'</select></div>'+
   '<div class="field"><label>Método de envío *</label>'+DB.settings.shipping.map(function(m){var av=opts.some(function(o){return o.id===m.id;});
    var extra=m.id==='pickup'&&!av?'No hay punto en tu provincia':(!av?'No disponible en tu zona':'');
    return '<div class="opt '+(co.shipId===m.id?'on':'')+(av?'':' off')+'" onclick="'+(av?'state.co.shipId=\''+m.id+'\';renderCheckout()':'')+'"><b>'+esc(m.label)+'</b><span class="pr">'+(m.price?fmt(m.price):'GRATIS')+'</span><small>'+esc(m.eta)+(extra?' · ⛔ '+extra:'')+'</small></div>';}).join('')+'</div>'+
   (co.shipId==='pickup'?'<div class="field"><label>Punto de recogida *</label><select class="inp" onchange="state.co.pickupId=this.value"><option value="">Selecciona…</option>'+DB.settings.pickup_points.filter(function(pt){return pt.city===co.province;}).map(function(pt){return '<option '+(co.pickupId===pt.label?'selected':'')+' value="'+esc(pt.label)+'">'+esc(pt.label)+' · '+esc(pt.hours)+'</option>';}).join('')+'</select></div>'
    :co.shipId==='nacional'?'<div class="field"><label>Dirección o punto de paqueo *</label><textarea class="inp" rows="2" oninput="state.co.address=this.value" placeholder="Ej: Punto Caribe Pack, Av. 27 de Febrero #100">'+esc(co.address)+'</textarea></div>'
    :co.shipId==='local'?'<div class="field"><label>Dirección de entrega *</label><textarea class="inp" rows="2" oninput="state.co.address=this.value" placeholder="Calle, número, sector, referencia">'+esc(co.address)+'</textarea></div>':'')+
   '<div class="field"><label>Notas para el repartidor</label><input class="inp" value="'+esc(co.notes)+'" oninput="state.co.notes=this.value" placeholder="Portón negro, llamar al llegar…"></div>'+
   '<div style="padding-bottom:20px"><button class="btn btn-primary" style="width:100%" onclick="toStep2()">Continuar al pago →</button></div>';
  renderSumBar(false);
 }else{
  var z=zoneOf(co.province),codOk=DB.settings.cod_zones.indexOf(z)!==-1;
  var tr=DB.settings.payments.filter(function(p){return p.type==='transfer'&&p.enabled;});
  var cod=DB.settings.payments.filter(function(p){return p.type==='cod'&&p.enabled;})[0];
  var card=DB.settings.payments.filter(function(p){return p.type==='card'&&p.enabled;})[0];
  var h='<div class="field"><label>Método de pago *</label>';
  h+='<div class="opt '+(co.payId==='transfer'?'on':'')+'" onclick="state.co.payId=\'transfer\';if(!state.co.bankId&&'+tr.length+')state.co.bankId=\''+tr[0].id+'\';renderCheckout()"><b>🏦 Transferencia bancaria</b><small>BPD · Banreservas · BHD · Qik (cuentas al confirmar)</small></div>';
  if(co.payId==='transfer')h+='<div class="field" style="margin-left:10px"><label>Banco destino</label><select class="inp" onchange="state.co.bankId=this.value">'+tr.map(function(t){return '<option value="'+t.id+'" '+(co.bankId===t.id?'selected':'')+'>'+esc(t.bank)+'</option>';}).join('')+'</select></div>';
  h+=cod?'<div class="opt '+(co.payId==='cod'?'on':'')+(codOk?'':' off')+'" onclick="'+(codOk?'state.co.payId=\'cod\';renderCheckout()':'')+'"><b>💵 Efectivo contra entrega</b><small>'+(codOk?'Pagas al recibir (Santo Domingo)':'⛔ Solo disponible en Santo Domingo')+'</small></div>':'';
  h+=card?'<div class="opt '+(co.payId==='card'?'on':'')+'" onclick="state.co.payId=\'card\';renderCheckout()"><b>💳 Tarjeta (Azul)</b><small>Pago seguro procesado por Azul · demo simulada</small></div>':'';
  h+='<div class="opt '+(co.payId==='credit'?'on':'')+'" onclick="state.co.payId=\'credit\';renderCheckout()"><b>📝 A crédito</b><small>Pagas en 30 días · coordinado con la tienda</small></div>';
  h+='</div><div style="padding-bottom:20px"><button class="btn btn-outline" onclick="state.co.step=1;renderCheckout()">← Volver</button><button class="btn btn-primary" onclick="confirmOrder()">Confirmar y Enviar Pedido ✔</button></div>';
  $('#coBody').innerHTML=h;renderSumBar(true);}}
function renderSumBar(withShip){var c=cartCalc(),ship=0;
 if(withShip&&state.co.shipId){var m=shipLabel(state.co.shipId);ship=(m.id==='local'&&c.subtotal>=DB.settings.free_threshold)?0:m.price;}
 var old=$('#sumbar');if(old)old.remove();
 var el=document.createElement('div');el.className='sumbar';el.id='sumbar';
 el.innerHTML='<div class="in"><div class="tot">Subtotal '+fmt(c.subtotal)+(c.discount?' − promo '+fmt(c.discount):'')+(withShip?' · Envío '+(ship?fmt(ship):'GRATIS'):'')+'<b>Total '+fmt(c.net+ship)+'</b></div>'+
  (withShip?'<button class="btn btn-primary" onclick="confirmOrder()">Confirmar y Enviar Pedido ✔</button>':'<button class="btn btn-primary" onclick="toStep2()">Continuar →</button>')+'</div>';
 document.body.appendChild(el);}
function toStep2(){var co=state.co;
 if(co.name.trim().length<3)return toast('Escribe tu nombre completo','warn');
 if(co.phone.length!==7)return toast('Teléfono: 7 dígitos después del prefijo','warn');
 if(!co.province)return toast('Selecciona tu provincia','warn');
 if(!co.shipId)return toast('Selecciona método de envío','warn');
 if(co.shipId!=='pickup'&&co.address.trim().length<6)return toast('Escribe la dirección de entrega','warn');
 if(co.shipId==='pickup'&&!co.pickupId)return toast('Selecciona el punto de recogida','warn');
 DB.abandoned=DB.abandoned.filter(function(a){return a.phone!==('+1'+co.prefix+co.phone);});
 DB.abandoned.unshift({phone:'+1'+co.prefix+co.phone,name:co.name,items:cart.slice(),at:new Date().toISOString()});
 persist();co.step=2;renderCheckout();window.scrollTo(0,0);}
function confirmOrder(){var co=state.co;if(!co.payId)return toast('Selecciona método de pago','warn');
 if(co.payId==='transfer'&&!co.bankId)return toast('Selecciona el banco','warn');
 var c=cartCalc(),m=shipLabel(co.shipId);
 var ship=(m.id==='local'&&c.subtotal>=DB.settings.free_threshold)?0:m.price;
 var payId=co.payId==='transfer'?co.bankId:(co.payId==='cod'?'cod':(co.payId==='credit'?'credito':'card_azul'));
 var cust=null;DB.customers.forEach(function(k){if(k.wa===(co.prefix+co.phone))cust=k;});
 var due=new Date();if(payId==='credito'||(cust&&cust.credit))due.setDate(due.getDate()+30);
 DB.seq.order+=1;
 var o={id:uid(),number:'RD-'+('000'+DB.seq.order).slice(-4),created_at:new Date().toISOString(),customer_name:co.name.trim(),customer_phone:'+1'+co.prefix+co.phone,
  province:co.province,shipping_method:co.shipId,shipping_cost:ship,address:co.address,pickup_point:co.pickupId,notes:co.notes,
  payment_method:payId,payment_status:'pendiente',status:'pendiente',subtotal:c.subtotal,discount:c.discount,total:c.net+ship,due_date:due.toISOString(),wa_sent_at:null,
  items:cart.map(function(l){var p=findP(l.pid);return {pid:l.pid,code:p.code||'',name:p.name,variant:l.variant,qty:l.qty,unit_price:p.price,cost:p.cost,line_total:p.price*l.qty};})};
 DB.orders.unshift(o);
 o.items.forEach(function(it){var p=findP(it.pid);if(p)p.stock=Math.max(0,p.stock-it.qty);});
 DB.abandoned=DB.abandoned.filter(function(a){return a.phone!==o.customer_phone;});
 cart=[];persistCart();renderCartBadge();persist();
 LSset('cy2-last',JSON.stringify(o.items.map(function(it){return {pid:it.pid,variant:it.variant,qty:it.qty};})));
 var sb=$('#sumbar');if(sb)sb.remove();
 show('confirm');renderConfirm(o);}
function waOrderMessage(o){var n=o.items.reduce(function(a,i){return a+i.qty;},0);var L=[];
 L.push('🛍 *Pedido #'+o.number+' — '+DB.name+'*');
 L.push('👤 '+o.customer_name+' · '+o.customer_phone.replace('+1',''));
 if(o.province)L.push('📍 '+o.province);
 L.push('');
 L.push('*Artículos ordenados ('+n+'):*');
 o.items.forEach(function(it){var v=Object.keys(it.variant).map(function(k){return it.variant[k];}).join(' · ');
  L.push(it.qty+'x '+it.name+(v?' · '+v:'')+' · '+fmt(it.line_total));});
 L.push('');
 L.push('Subtotal: '+fmt(o.subtotal));
 if(o.discount)L.push('Promo: −'+fmt(o.discount));
 L.push('Envío ('+shipLabel(o.shipping_method).label.split(' (')[0]+'): '+(o.shipping_cost?fmt(o.shipping_cost):'GRATIS'));
 L.push('*Total: '+fmt(o.total)+'*');
 L.push('💳 Pago: '+payLabel(o.payment_method).bank);
 L.push('');
 L.push('_Pedido hecho desde el catálogo. ¿Confirman disponibilidad?_');
 return L.join('\n');}
function sendOrderWA(id){var o=findO(id);if(!o)return;
 var msg=waOrderMessage(o);
 var imgs=o.items.map(function(it){var p=findP(it.pid);return p?p.image:'';});
 if(!shareFiles(msg,imgs))openWaText(msg);
 markWaSent(id);}
function renderConfirm(o){var pm=payLabel(o.payment_method),msg=waOrderMessage(o);
 var banks=DB.settings.payments.filter(function(p){return p.type==='transfer'&&p.enabled;});
 $('#confBody').innerHTML='<div class="conf-card" style="text-align:center"><span class="pill ok">Pedido creado</span>'+
  '<h1 style="font-size:38px;font-weight:900;margin:12px 0 6px;letter-spacing:-.02em">#'+o.number+'</h1>'+
  '<p style="color:var(--text2);font-size:15px">Total '+fmt(o.total)+' · '+esc(pm.bank)+'</p>'+
  '<div style="margin:16px 0"><button class="btn btn-wa" style="width:100%" onclick="sendOrderWA(\''+o.id+'\')">'+icWa(18)+'Enviar pedido por WhatsApp (con fotos)</button></div>'+
  '<p style="font-size:13px;color:var(--text2)">Se abrirá WhatsApp con el pedido y las fotos de los artículos.</p></div>'+
  (pm.type==='transfer'?'<div class="conf-card"><b style="font-size:17px;font-weight:700">Datos para tu transferencia</b><div style="margin-top:12px">'+
   banks.map(function(b){return '<div class="bankline"><b>'+esc(b.bank)+'</b> '+esc(b.acct)+' · '+esc(b.holder)+'<button onclick="copyText(\''+esc(b.bank+' '+b.acct+' '+b.holder)+'\')">COPIAR</button></div>';}).join('')+
   '<div style="margin-top:12px"><label class="field" style="margin:0"><span style="font-size:12px;font-weight:700;color:var(--text2)">📎 Ya transferí — subir comprobante</span><input type="file" style="margin-top:8px" onchange="uploadProof(\''+o.id+'\')"></label></div></div>':'')+
  '<div class="conf-card"><b style="font-size:17px;font-weight:700">Resumen</b><div class="msgbox" style="margin-top:12px">'+esc(msg)+'</div>'+
  '<div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-outline" onclick="copyText(decodeURIComponent(\''+encodeURIComponent(msg)+'\'))">'+ic('copy',16)+'Copiar pedido</button>'+
  '<a class="btn btn-outline" href="https://wa.me/'+storePhone()+'?text='+encodeURIComponent('Hola, consulta sobre mi pedido #'+o.number)+'" target="_blank" rel="noopener noreferrer">'+icWa(16)+'Soporte</a>'+
  '<button class="btn btn-primary" onclick="goTienda()">Seguir comprando</button></div></div>';}
function markWaSent(id){var o=findO(id);if(o&&!o.wa_sent_at){o.wa_sent_at=new Date().toISOString();persist();toast('Pedido transmitido al vendedor ✔','good');}}
function uploadProof(id){findO(id).proof=true;persist();toast('Comprobante recibido ✔','good');}

/* ADMIN */
function openAdmin(){if(!DB)return;show('admin');renderAdmin();}
var TABS=[['pedidos','receipt','Pedidos'],['inventario','box','Inventario'],['finanzas','chart','Márgenes'],['cxc','wallet','CxC'],['clientes','users','Clientes'],['publicar','mega','Publicar'],['config','gear','Config']];
function renderAdmin(){if(!DB)return;
 var logoHtml=DB.logo?'<img src="'+DB.logo+'" alt="">':esc(DB.name.slice(0,2).toUpperCase());
 $('#adminHead').innerHTML=
  '<div class="avatar-sm">'+logoHtml+'</div>'+
  '<div><b>'+esc(DB.name)+'</b><div class="live-txt">Tiempo real activo</div></div>'+
  '<div class="right">'+
   '<button class="btn btn-primary" style="border-radius:999px;padding:13px 26px" onclick="openManualSale()">Nueva venta</button>'+
   '<button class="circle-btn" id="themeBtn2" onclick="toggleTheme()"></button>'+
   '<button class="circle-btn" onclick="logout()" title="Cerrar sesión">'+ic('exit',16)+'</button>'+
   '<button class="circle-btn" onclick="goTienda()" title="Ver tienda">'+ic('eye',16)+'</button>'+
  '</div>';
 var tb=$('#themeBtn2');if(tb)tb.innerHTML=ic(curTheme()==='dark'?'sun':'moon',18);
 $('#adminTabs').innerHTML=TABS.map(function(t){return '<button class="utab '+(state.tab===t[0]?'on':'')+'" onclick="state.tab=\''+t[0]+'\';renderAdmin()">'+t[2]+'</button>';}).join('');
 var b=$('#adminBody');
 if(state.tab==='pedidos')renderPedidos(b);else if(state.tab==='inventario')renderInv(b);
 else if(state.tab==='finanzas')renderFin(b);else if(state.tab==='cxc')renderCxC(b);
 else if(state.tab==='clientes')renderCRM(b);else if(state.tab==='publicar')renderPub(b);else renderConfig(b);}
function renderPedidos(b){var pf=state.pf;
 var list=DB.orders.filter(function(o){return (pf.status==='todos'||o.status===pf.status)&&((o.number+o.customer_name).toLowerCase().indexOf(pf.q.toLowerCase())!==-1);});
 var pend=DB.orders.filter(function(o){return o.status==='pendiente';}).length;
 var hoy=DB.orders.filter(function(o){return o.created_at.slice(0,10)===new Date().toISOString().slice(0,10);}).length;
 b.innerHTML='<div class="kpis"><div class="kpi"><b>'+hoy+'</b><span>Pedidos hoy</span></div><div class="kpi"><b class="amber">'+pend+'</b><span>Pendientes</span></div><div class="kpi"><b>'+DB.orders.length+'</b><span>Total</span></div><div class="kpi"><b class="'+(DB.abandoned.length?'amber':'ok')+'">'+DB.abandoned.length+'</b><span>Carritos abiertos</span></div></div>'+
  '<div class="searchwrap" style="margin:0 0 14px">'+ic('search',16)+'<input class="inp" placeholder="Buscar # o cliente" value="'+esc(pf.q)+'" oninput="state.pf.q=this.value;renderAdmin()"></div>'+
  '<div class="chips" style="margin-bottom:14px">'+['todos','pendiente','enviado','entregado','cancelado'].map(function(s){return '<button class="chip '+(pf.status===s?'on':'')+'" onclick="state.pf.status=\''+s+'\';renderAdmin()">'+s+'</button>';}).join('')+'</div>'+
  list.map(function(o){return '<div class="row" onclick="openOrder(\''+o.id+'\')" style="cursor:pointer"><div class="row-main"><b>#'+o.number+' · '+esc(o.customer_name)+'</b><small>'+fDT(o.created_at)+' · '+o.items.length+' ítem'+(o.items.length>1?'s':'')+'<br>'+esc(payLabel(o.payment_method).bank)+'</small></div>'+
   '<b style="font-size:16px">'+fmt(o.total)+'</b><span class="pill '+o.status+'">'+o.status+'</span></div>';}).join('')+
  (DB.abandoned.length?'<h3 style="margin:20px 0 10px;font-size:17px;font-weight:700">🛒 Carritos abandonados</h3>'+DB.abandoned.map(function(a,i){return '<div class="row"><div class="row-main"><b>'+esc(a.name||a.phone)+'</b><small>'+a.items.length+' líneas · '+fDT(a.at)+'</small></div><a class="btn btn-wa" style="padding:8px 14px;font-size:12px" target="_blank" rel="noopener noreferrer" href="https://wa.me/'+a.phone.replace('+','')+'?text='+encodeURIComponent('Hola '+(a.name||'')+' 👋 Guardamos tu carrito. Retómalo aquí: '+storeUrl())+'">Recordar</a><button class="icon-btn" onclick="DB.abandoned.splice('+i+',1);persist();renderAdmin()">'+ic('x',16)+'</button></div>';}).join(''):'');}
function openOrder(id){var o=findO(id);$('#orderBk').className='bk show';$('#orderDr').className='drawer show';
 var bal=balanceOf(o);
 $('#ordHd').innerHTML='<div style="display:flex;align-items:center;gap:8px"><b style="font-size:18px;font-weight:700;flex:1">#'+o.number+'</b><span class="pill '+o.status+'">'+o.status+'</span><button class="icon-btn" onclick="closeOrder()">'+ic('x',18)+'</button></div>';
 $('#ordBd').innerHTML='<p style="font-size:13px;color:var(--text2);margin-bottom:12px">'+fDT(o.created_at)+' · '+esc(o.customer_name)+' · '+esc(o.customer_phone)+'</p>'+
  o.items.map(function(it){var p=findP(it.pid);var v=Object.keys(it.variant).map(function(k){return it.variant[k];}).join(' · ');
   return '<div class="cline">'+(p?swHTML(p):'')+'<div class="row-main"><b style="font-size:14px">'+esc(it.name)+(it.code?' <span style="color:var(--text2);font-size:11px">'+esc(it.code)+'</span>':'')+'</b><small>'+(v?esc(v)+' · ':'')+it.qty+' × '+fmt(it.unit_price)+' · costo '+fmt(it.cost)+'</small></div><b style="font-size:14px">'+fmt(it.line_total)+'</b></div>';}).join('')+
  '<div style="font-size:13px;margin:12px 0;color:var(--text2)">Subtotal '+fmt(o.subtotal)+(o.discount?' · promo −'+fmt(o.discount):'')+' · Envío '+(o.shipping_cost?fmt(o.shipping_cost):'GRATIS')+' · <b style="color:var(--text)">Total '+fmt(o.total)+'</b></div>'+
  '<div style="font-size:13px;margin-bottom:10px;color:var(--text2)">🚚 '+esc(shipLabel(o.shipping_method).label)+'<br>📍 '+esc(o.shipping_method==='pickup'?o.pickup_point:o.address)+'<br>💳 '+esc(payLabel(o.payment_method).bank)+(o.proof?' · 📎 comprobante recibido':'')+'</div>'+
  '<a class="btn btn-wa" style="width:100%;margin:10px 0" href="https://wa.me/'+o.customer_phone.replace('+','')+'?text='+encodeURIComponent('Hola '+o.customer_name.split(' ')[0]+' 👋 Tu pedido #'+o.number+': estado '+o.status.toUpperCase()+'. ¡Gracias!')+'" target="_blank" rel="noopener noreferrer">'+icWa(17)+'Notificar al cliente</a>'+
  '<div class="field"><label>Cambiar estado</label><div class="chips">'+['pendiente','enviado','entregado','cancelado'].map(function(s){return '<button class="chip '+(o.status===s?'on':'')+'" onclick="setStatus(\''+o.id+'\',\''+s+'\')">'+s+'</button>';}).join('')+'</div></div>'+
  '<div class="field"><label>Pagos · saldo '+fmt(bal)+'</label>'+DB.payments.filter(function(p){return p.order_id===o.id;}).map(function(p){return '<div class="bankline">'+fmt(p.amount)+' · '+esc(payLabel(p.method).bank)+' · '+esc(p.reference||'')+'</div>';}).join('')+
  (bal>0?'<button class="btn btn-primary" style="width:100%" onclick="payModal(\''+o.id+'\')">'+ic('plus',16)+'Registrar pago</button>':'<span class="pill ok">Pagado</span>')+'</div>'+
  '<div class="field"><label>Recibos</label>'+DB.receipts.filter(function(r){return r.order_id===o.id;}).map(function(r){return '<div class="bankline"><b>'+r.number+'</b> '+fDate(r.issued_at)+'<button onclick="openReceipt(\''+r.id+'\')">VER / IMPRIMIR</button></div>';}).join('')+(DB.receipts.filter(function(r){return r.order_id===o.id;}).length?'':'<small style="color:var(--text2)">Se genera al completar el pago.</small>')+'</div>';}
function closeOrder(){$('#orderBk').className='bk';$('#orderDr').className='drawer';}
function setStatus(id,s){var o=findO(id);if(o.status===s)return;
 if(s==='cancelado'){askConfirm('Cancelar #'+o.number+' y devolver stock?',function(){o.items.forEach(function(it){var p=findP(it.pid);if(p)p.stock+=it.qty;});o.status='cancelado';persist();renderAdmin();openOrder(id);toast('Pedido cancelado, stock repuesto','warn');});return;}
 o.status=s;persist();renderAdmin();openOrder(id);toast('Estado → '+s,'good');}
function payModal(id){var bal=balanceOf(findO(id));
 openModal('<h3 style="font-size:18px;font-weight:700;margin-bottom:14px">Registrar pago · #'+findO(id).number+'</h3>'+
  '<div class="field"><label>Monto (saldo '+fmt(bal)+')</label><input class="inp" id="pmAmt" type="number" value="'+bal+'"></div>'+
  '<div class="field"><label>Referencia / comprobante</label><input class="inp" id="pmRef" placeholder="REF-…, efectivo, cheque…"></div>'+
  '<button class="btn btn-primary" style="width:100%" onclick="submitPay(\''+id+'\')">Registrar</button>');}
function submitPay(id){var o=findO(id),amt=parseFloat($('#pmAmt').value)||0;if(amt<=0)return toast('Monto inválido','warn');
 DB.payments.push({id:uid(),order_id:id,amount:amt,method:o.payment_method,reference:$('#pmRef').value,received_at:new Date().toISOString()});
 var bal=balanceOf(o);o.payment_status=bal<=0?'pagado':'parcial';
 if(bal<=0){DB.seq.receipt+=1;var r={id:uid(),number:'R-'+('000'+DB.seq.receipt).slice(-4),order_id:id,issued_at:new Date().toISOString()};DB.receipts.unshift(r);
  persist();closeModal();renderAdmin();openOrder(id);toast('Pago completo · recibo '+r.number+' ✔','good','VER RECIBO',function(){openReceipt(r.id);});return;}
 persist();closeModal();renderAdmin();openOrder(id);toast('Pago parcial registrado','good');}
function openReceipt(id){var r=null;DB.receipts.forEach(function(x){if(x.id===id)r=x;});if(!r)return;var o=findO(r.order_id);
 openModal('<div id="printArea" style="padding:8px"><h2>'+esc(DB.name.toUpperCase())+' SRL</h2><div style="font-size:12px;color:#444">'+esc(DB.bio?DB.bio.split('\n')[0]:'Santo Domingo, RD')+'</div>'+
  '<div style="margin:12px 0;font-size:13px"><b>RECIBO DE PAGO '+r.number+'</b><br>Fecha: '+fDT(r.issued_at)+'<br>Pedido: #'+o.number+'<br>Cliente: '+esc(o.customer_name)+' · '+esc(o.customer_phone)+'</div>'+
  '<table><tr><th>Concepto</th><th>Cant.</th><th>Importe</th></tr>'+o.items.map(function(it){return '<tr><td>'+esc(it.name)+(it.code?' ('+esc(it.code)+')':'')+' ('+esc(Object.keys(it.variant).map(function(k){return it.variant[k];}).join(', '))+')</td><td>'+it.qty+'</td><td>'+fmt(it.line_total)+'</td></tr>';}).join('')+
  '<tr><td>Envío</td><td>1</td><td>'+(o.shipping_cost?fmt(o.shipping_cost):'GRATIS')+'</td></tr>'+
  (o.discount?'<tr><td>Promoción</td><td>1</td><td>−'+fmt(o.discount)+'</td></tr>':'')+
  '<tr><td colspan="2"><b>TOTAL</b></td><td><b>'+fmt(o.total)+'</b></td></tr></table>'+
  '<div style="font-size:12px">Pagado vía: '+esc(payLabel(o.payment_method).bank)+'<br>Monto recibido: '+fmt(paidOf(o.id))+'<br><br>_________________________<br>Firma · Gracias por su compra</div></div>'+
  '<div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary" onclick="window.print()">'+ic('print',16)+'Imprimir / PDF</button><button class="btn btn-outline" onclick="toast(\'Recibo enviado por email (simulado)\',\'good\')">✉ Email</button><button class="btn btn-outline" onclick="closeModal()">Cerrar</button></div>');}
/* venta manual */
function openManualSale(){window._ms={lines:[],pay:'transfer_bpd',status:'pendiente',paid:true,name:'',phone:''};renderManualSale();}
function msAdd(){var pid=$('#msProd').value,q=parseInt($('#msQty').value,10)||1;var p=findP(pid);if(!p)return toast('Selecciona un producto','warn');
 var f=null;window._ms.lines.forEach(function(l){if(l.pid===pid)f=l;});
 if(f)f.qty+=q;else window._ms.lines.push({pid:pid,qty:q});
 renderManualSale();}
function msDel(i){window._ms.lines.splice(i,1);renderManualSale();}
function renderManualSale(){var ms=window._ms;var sub=0;
 var linesHtml=ms.lines.map(function(l,i){var p=findP(l.pid);sub+=p.price*l.qty;
  return '<div class="bankline"><b>'+l.qty+'x</b> '+esc(p.name)+' <span style="margin-left:auto">'+fmt(p.price*l.qty)+'</span><button class="icon-btn" onclick="msDel('+i+')">'+ic('x',14)+'</button></div>';}).join('');
 var payOpts=DB.settings.payments.filter(function(p){return p.enabled&&p.id!=='credito';}).map(function(p){return '<option value="'+p.id+'">'+esc(p.bank)+'</option>';}).join('')+'<option value="credito">A crédito (30 días)</option>';
 openModal('<h3 style="font-size:18px;font-weight:700;margin-bottom:14px">Nueva venta (registro manual)</h3>'+
  '<div class="fgrid"><div class="field"><label>Cliente *</label><input class="inp" id="msName" value="'+esc(ms.name)+'" oninput="window._ms.name=this.value"></div>'+
  '<div class="field"><label>Teléfono</label><input class="inp" id="msPhone" value="'+esc(ms.phone)+'" oninput="window._ms.phone=this.value.replace(/\\D/g,\'\')"></div></div>'+
  '<div class="field"><label>Agregar producto</label><div style="display:flex;gap:8px"><select class="inp" id="msProd">'+DB.products.map(function(p){return '<option value="'+p.id+'">'+esc(p.name)+' ('+p.stock+')</option>';}).join('')+'</select><input class="inp" id="msQty" type="number" value="1" style="width:70px"><button class="btn btn-outline" onclick="msAdd()">'+ic('plus',16)+'</button></div></div>'+
  '<div class="field"><label>Artículos</label>'+(linesHtml||'<small style="color:var(--text2)">Sin artículos aún.</small>')+'</div>'+
  '<div class="fgrid"><div class="field"><label>Pago</label><select class="inp" onchange="window._ms.pay=this.value">'+payOpts+'</select></div>'+
  '<div class="field"><label>Estado</label><select class="inp" onchange="window._ms.status=this.value"><option value="pendiente">Pendiente</option><option value="enviado">Enviado</option><option value="entregado">Entregado</option></select></div></div>'+
  '<label style="display:flex;align-items:center;font-size:13px;font-weight:600;margin-bottom:12px;gap:8px"><input type="checkbox" '+(ms.paid?'checked':'')+' onchange="window._ms.paid=this.checked"> Pago recibido</label>'+
  '<div style="font-weight:800;font-size:18px;margin-bottom:14px">Total: '+fmt(sub)+'</div>'+
  '<button class="btn btn-primary" style="width:100%" onclick="msSave()">Registrar venta</button>');}
function msSave(){var ms=window._ms;
 if(!ms.name.trim())return toast('Escribe el nombre del cliente','warn');
 if(!ms.lines.length)return toast('Agrega al menos un artículo','warn');
 DB.seq.order+=1;
 var items=ms.lines.map(function(l){var p=findP(l.pid);return {pid:p.id,code:p.code||'',name:p.name,variant:{},qty:l.qty,unit_price:p.price,cost:p.cost,line_total:p.price*l.qty};});
 var sub=items.reduce(function(a,i){return a+i.line_total;},0);
 var due=new Date();if(ms.pay==='credito')due.setDate(due.getDate()+30);
 var o={id:uid(),number:'RD-'+('000'+DB.seq.order).slice(-4),created_at:new Date().toISOString(),customer_name:ms.name.trim(),customer_phone:ms.phone?'+1'+ms.phone:'',
  province:'Venta manual',shipping_method:'pickup',shipping_cost:0,address:'',pickup_point:'',notes:'Registrada manualmente en el panel',
  payment_method:ms.pay,payment_status:ms.paid?'pagado':'pendiente',status:ms.status,subtotal:sub,discount:0,total:sub,due_date:due.toISOString(),wa_sent_at:new Date().toISOString(),items:items};
 items.forEach(function(it){var p=findP(it.pid);if(p)p.stock=Math.max(0,p.stock-it.qty);});
 DB.orders.unshift(o);
 if(ms.paid){DB.payments.push({id:uid(),order_id:o.id,amount:sub,method:ms.pay,reference:'Venta manual',received_at:new Date().toISOString()});
  DB.seq.receipt+=1;DB.receipts.unshift({id:uid(),number:'R-'+('000'+DB.seq.receipt).slice(-4),order_id:o.id,issued_at:new Date().toISOString()});}
 persist();closeModal();renderAdmin();toast('Venta #'+o.number+' registrada ✔','good');}
/* inventario */
function openProdMenu(id){var p=findP(id);if(!p)return;
 openModal('<h3 style="font-size:18px;font-weight:700;margin-bottom:14px">'+esc(p.name)+'</h3>'+
  '<button class="btn btn-outline" style="width:100%;margin-bottom:10px" onclick="closeModal();openProd(\''+id+'\')">'+ic('edit',16)+'Editar producto</button>'+
  '<button class="btn btn-outline" style="width:100%;color:var(--red);border-color:var(--red)" onclick="closeModal();delProd(\''+id+'\')">'+ic('trash',16)+'Eliminar</button>');}
function renderInv(b){
 var mg=function(p){return p.price>0?Math.round((p.price-p.cost)/p.price*100):0;};
 b.innerHTML='<div class="invcount"><span>'+DB.products.length+' productos</span><button onclick="openProd()">'+ic('plus',18)+'Nuevo producto</button></div>'+
 DB.products.map(function(p){
  var sold=p.stock<=0, low=p.stock>0&&p.stock<=DB.settings.low_stock;
  var pill=sold?'<span class="pill out">Agotado</span>':low?'<span class="pill low">Poco · '+p.stock+' uds</span>':'<span class="pill ok">'+p.stock+' uds</span>';
  var c=tileC(p);
  return '<div class="invrow">'+
   '<div class="thumb" style="'+(p.image?'background-image:url('+p.image+')':'background:'+c.bg+';color:'+c.fg)+'">'+(p.image?'':ic(catIcon(p.cat),22))+'</div>'+
   '<div style="flex:1;min-width:0">'+
    '<h4>'+esc(p.name)+' · '+esc(p.code||'—')+'</h4>'+
    '<div class="meta">'+esc(p.cat)+(p.subcat?' · '+esc(p.subcat):'')+' · '+fmt(p.price)+'</div>'+
    '<div class="line">'+pill+'<span class="mg">margen '+mg(p)+'%</span>'+
     '<div class="stepper"><button onclick="bump(\''+p.id+'\',-1)">−</button><span>'+p.stock+'</span><button onclick="bump(\''+p.id+'\',1)">+</button></div>'+
    '</div>'+
   '</div>'+
   '<button class="icon-btn menu" onclick="openProdMenu(\''+p.id+'\')">⋯</button>'+
  '</div>';
 }).join('');
}
function bump(id,d){var p=findP(id);p.stock=Math.max(0,p.stock+d);persist();renderAdmin();renderCartBadge();}
function delProd(id){var p=findP(id);askConfirm('¿Eliminar "'+p.name+'"?',function(){DB.products=DB.products.filter(function(x){return x.id!==id;});persist();renderAdmin();renderCatalog();toast('Producto eliminado','warn');});}
var prodImg='';
function openProd(id){var p=id?findP(id):null;prodImg=p?(p.image||''):'';
 $('#prodTitle').textContent=p?'Editar producto':'Nuevo producto';
 $('#prodBd').innerHTML='<input type="hidden" id="fId" value="'+(p?p.id:'')+'">'+
  '<div class="field"><label>Foto del producto</label><div style="display:flex;align-items:center;gap:14px"><div class="imgprev" id="prodImgPrev"></div>'+
  '<div><label class="btn btn-outline" style="cursor:pointer;margin-bottom:8px">'+ic('cam',16)+'Subir foto<input type="file" accept="image/*" style="display:none" onchange="pickProdImg(this)"></label>'+
  '<button class="btn btn-outline" onclick="prodImg=\'\';renderProdImgPrev()">Quitar</button></div></div></div>'+
  '<div class="fgrid"><div class="field"><label>Código (SKU)</label><input class="inp" id="fCode" placeholder="CH-001" value="'+(p?esc(p.code||''):'')+'"></div>'+
  '<div class="field"><label>Categoría</label><select class="inp" id="fCat" onchange="refreshSubcats()">'+['Ropa','Accesorios','Calzado','General'].map(function(c){return '<option '+(p&&p.cat===c?'selected':'')+'>'+c+'</option>';}).join('')+'</select></div></div>'+
  '<div class="field"><label>Subcategoría</label><select class="inp" id="fSub"></select></div>'+
  '<div class="field"><label>Nombre *</label><input class="inp" id="fName" value="'+(p?esc(p.name):'')+'"></div>'+
  '<div class="fgrid"><div class="field"><label>Precio *</label><input class="inp" id="fPrice" type="number" value="'+(p?p.price:'')+'"></div><div class="field"><label>Costo (solo admin) *</label><input class="inp" id="fCost" type="number" value="'+(p?p.cost:'')+'"></div></div>'+
  '<div class="fgrid"><div class="field"><label>Stock *</label><input class="inp" id="fStock" type="number" value="'+(p?p.stock:'0')+'"></div><div class="field"><label>Tallas</label><input class="inp" id="fSizes" value="'+(p?p.sizes.join(', '):'')+'"></div></div>'+
  '<div class="field"><label>Colores</label><input class="inp" id="fColors" value="'+(p?p.colors.map(function(c){return c.n;}).join(', '):'')+'"></div>'+
  '<div class="field"><label>Descripción</label><textarea class="inp" id="fDesc" rows="2">'+(p?esc(p.desc):'')+'</textarea></div>'+
  '<button class="btn btn-primary" style="width:100%" onclick="saveProd()">Guardar</button>';
 window._prodSub=p?(p.subcat||''):'';
 refreshSubcats();renderProdImgPrev();
 $('#prodBk').className='bk show';$('#prodDr').className='drawer show';}
function refreshSubcats(){var cat=$('#fCat').value,opts=SUBCATS[cat]||['Otros'];
 $('#fSub').innerHTML='<option value="">Sin subcategoría</option>'+opts.map(function(s){return '<option '+(window._prodSub===s?'selected':'')+'>'+s+'</option>';}).join('');}
function pickProdImg(inp){if(!inp.files||!inp.files[0])return;
 fileToDataURL(inp.files[0],640,false,function(d){prodImg=d;renderProdImgPrev();toast('Foto lista ✔','good');});}
function renderProdImgPrev(){var el=$('#prodImgPrev');if(el)el.innerHTML=prodImg?'<img src="'+prodImg+'" alt="">':ic('cam',24);}
function closeProd(){$('#prodBk').className='bk';$('#prodDr').className='drawer';}
function saveProd(){var id=$('#fId').value,name=$('#fName').value.trim(),price=parseFloat($('#fPrice').value),cost=parseFloat($('#fCost').value),stock=parseInt($('#fStock').value,10);
 if(!name||isNaN(price)||isNaN(cost)||isNaN(stock))return toast('Completa nombre, precio, costo y stock','warn');
 var sizes=$('#fSizes').value.split(',').map(function(s){return s.trim();}).filter(Boolean);
 var cn=$('#fColors').value.split(',').map(function(s){return s.trim();}).filter(Boolean);
 var colors=cn.length?cn.map(function(n){return {n:n};}):[{n:'Único'}];
 var code=$('#fCode').value.trim(),sub=$('#fSub').value,cat=$('#fCat').value;
 if(id){var p=findP(id);p.name=name;p.price=price;p.cost=cost;p.stock=stock;p.cat=cat;p.subcat=sub;p.code=code;p.sizes=sizes;p.colors=colors;p.desc=$('#fDesc').value;p.image=prodImg;}
 else DB.products.unshift({id:uid(),code:code,subcat:sub,name:name,cat:cat,price:price,cost:cost,stock:stock,desc:$('#fDesc').value,sizes:sizes,colors:colors,hue:200,image:prodImg});
 persist();closeProd();renderAdmin();renderCatalog();toast('Guardado ✔','good');}
/* finanzas */
function renderFin(b){var days=state.finPeriod,cut=new Date();cut.setDate(cut.getDate()-days);
 var os=DB.orders.filter(function(o){return o.status!=='cancelado'&&new Date(o.created_at)>=cut;});
 var rev=0,cogs=0,per={};
 os.forEach(function(o){o.items.forEach(function(it){rev+=it.line_total;cogs+=it.cost*it.qty;
  var e=per[it.pid]||{name:it.name,units:0,rev:0,cost:0};e.units+=it.qty;e.rev+=it.line_total;e.cost+=it.cost*it.qty;per[it.pid]=e;});});
 var gain=rev-cogs,mg=rev?Math.round(gain/rev*100):0;
 var weeks=[0,0,0,0];os.forEach(function(o){var d=(Date.now()-new Date(o.created_at))/86400000;var w=3-Math.floor(d/7);if(w>=0&&w<4)weeks[w]+=o.subtotal;});
 var mx=Math.max.apply(null,weeks.concat([1]));
 var rows=Object.keys(per).map(function(k){return per[k];}).sort(function(a,b2){return (b2.rev-b2.cost)-(a.rev-a.cost);});
 b.innerHTML='<div class="finance-section">'+
  '<h3 style="font-size:17px;font-weight:700;margin-bottom:16px">Rendimiento del período</h3>'+
  '<div class="chips" style="margin-bottom:16px">'+[7,30,90,365].map(function(d){return '<button class="chip '+(days===d?'on':'')+'" onclick="state.finPeriod='+d+';renderAdmin()">Últimos '+d+' d</button>';}).join('')+'</div>'+
  '<div class="kpis" style="margin:0"><div class="kpi"><b>'+fmt(rev)+'</b><span>Ingresos</span></div><div class="kpi"><b>'+fmt(cogs)+'</b><span>COGS</span></div><div class="kpi"><b class="ok">'+fmt(gain)+'</b><span>Ganancia</span></div><div class="kpi"><b class="'+(mg<15?'red':'ok')+'">'+mg+'%</b><span>Margen</span></div></div>'+
  '</div>'+
  '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:12px">Tendencia semanal (4 sem)</h3><div class="bars">'+weeks.map(function(w){return '<i style="height:'+Math.round(w/mx*100)+'%"></i>';}).join('')+'</div></div>'+
  '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:12px">Detalle por producto</h3>'+
  '<div style="overflow-x:auto"><table class="fin"><tr><th>Producto</th><th>Uds</th><th>Ingresos</th><th>COGS</th><th>Ganancia</th><th>Margen</th></tr>'+
  rows.map(function(r){var m=r.rev?Math.round((r.rev-r.cost)/r.rev*100):0;
   return '<tr><td style="font-weight:600">'+esc(r.name)+'</td><td>'+r.units+'</td><td>'+fmt(r.rev)+'</td><td>'+fmt(r.cost)+'</td><td><b>'+fmt(r.rev-r.cost)+'</b></td><td><span class="pill '+(m>=40?'ok':m<15?'out':'low')+'">'+m+'%</span></td></tr>';}).join('')+'</table></div></div>';}
/* cxc */
function renderCxC(b){var open=DB.orders.filter(function(o){return o.payment_method==='credito'&&o.status!=='cancelado'&&balanceOf(o)>0;});
 var bk={'Al día':0,'1–30':0,'31–60':0,'61–90':0,'90+':0};
 function bOf(o){var d=Math.floor((Date.now()-new Date(o.due_date))/86400000);if(d<=0)return 'Al día';if(d<=30)return '1–30';if(d<=60)return '31–60';if(d<=90)return '61–90';return '90+';}
 open.forEach(function(o){bk[bOf(o)]+=balanceOf(o);});
 b.innerHTML='<div class="cxckpis">'+Object.keys(bk).map(function(k){var v=bk[k];
   var lbl=k==='Al día'?'Al día':k+' días';
   var cls=k==='Al día'?(v>0?'green':'muted'):(v>0?'red':'muted');
   return '<div class="cxckpi'+(k==='90+'?' wide':'')+'"><span>'+lbl+'</span><b class="'+cls+'">'+fmt(v)+'</b></div>';}).join('')+'</div>'+
  '<p class="cxcnote">Solo pedidos vendidos a crédito con saldo pendiente.</p>'+
  open.map(function(o){var k=bOf(o);var kl=k==='Al día'?'Al día':k;
   return '<div class="cxccard">'+
    '<div style="display:flex;align-items:flex-start"><div style="flex:1"><h4>'+esc(o.customer_name)+'</h4><div class="num">#'+o.number+'</div></div><span class="pill '+(k==='Al día'?'ok':'out')+'">'+kl+'</span></div>'+
    '<div class="due">Vence '+fDate(o.due_date)+' · saldo '+fmt(balanceOf(o))+'</div>'+
    '<div class="btns"><button class="btn btn-outline" onclick="payModal(\''+o.id+'\')">'+ic('wallet',16)+'Cobrar</button>'+
    '<a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://wa.me/'+o.customer_phone.replace('+','')+'?text='+encodeURIComponent('Hola '+o.customer_name.split(' ')[0]+' 👋 Recordatorio: saldo '+fmt(balanceOf(o))+' del pedido #'+o.number+'.')+'">'+ic('bell',16)+'Recordar</a></div>'+
   '</div>';}).join('')||'<p style="color:var(--text2);text-align:center;padding:30px 0">🎉 No hay saldos de crédito abiertos.</p>';}
/* clientes */
function renderCRM(b){b.innerHTML='<div class="row" style="margin-bottom:16px"><input class="inp" id="ncName" style="flex:1" placeholder="Nombre"><input class="inp" id="ncWa" style="flex:1" placeholder="WhatsApp 809…"><button class="btn btn-primary" onclick="addCust()">'+ic('plus',16)+'</button></div>'+
 DB.customers.map(function(c,i){
  var ini=c.name.charAt(0).toUpperCase();
  return '<div class="customer-card">'+
   '<div class="sw">'+esc(ini)+'</div>'+
   '<div class="row-main">'+
    '<b>'+esc(c.name)+'</b>'+
    '<small style="margin-top:4px"><a href="https://wa.me/'+c.wa+'" target="_blank" rel="noopener noreferrer" style="color:var(--blue)">+1 '+esc(c.wa)+'</a> · '+(c.credit?'<span class="pill info">crédito 30 d</span>':'sin crédito')+'</small>'+
    '<textarea placeholder="Notas: qué compra, preferencias…" onblur="DB.customers['+i+'].notes=this.value;persist();toast(\'Nota guardada\',\'good\')">'+esc(c.notes)+'</textarea>'+
   '</div>'+
   '<div class="customer-actions">'+
    '<select class="pill '+c.status+'" style="border:none" onchange="DB.customers['+i+'].status=this.value;persist();renderAdmin()"><option value="pendiente" '+(c.status==='pendiente'?'selected':'')+'>⏳ Pendiente</option><option value="enviado" '+(c.status==='enviado'?'selected':'')+'>🚚 Enviado</option><option value="entregado" '+(c.status==='entregado'?'selected':'')+'>✔ Entregado</option></select>'+
    '<label style="font-size:11px;font-weight:700;display:flex;align-items:center;gap:6px"><input type="checkbox" '+(c.credit?'checked':'')+' onchange="DB.customers['+i+'].credit=this.checked;persist()"> crédito</label>'+
    '<button class="icon-btn" onclick="DB.customers.splice('+i+',1);persist();renderAdmin()">'+ic('trash',16)+'</button>'+
   '</div>'+
  '</div>';
 }).join('');}
function addCust(){var n=$('#ncName').value.trim(),w=$('#ncWa').value.replace(/\D/g,'');if(!n||!w)return toast('Nombre y WhatsApp obligatorios','warn');
 DB.customers.unshift({id:uid(),name:n,wa:w,status:'pendiente',notes:'',credit:false});persist();renderAdmin();toast('Cliente agregado','good');}
/* publicar */
function captionFor(p){var vs=[];if(p.sizes.length)vs.push('Tallas '+p.sizes.join('–'));if(p.colors.length)vs.push(p.colors.map(function(c){return c.n;}).join('/'));
 return '🖤 '+p.name+' — '+fmt(p.price)+'\n'+vs.join(' · ')+' · '+(p.stock>0?'✔ Disponible':'⛔ Agotado')+'\n📲 Pídelo: '+storeUrl()+'/p/'+p.id+'\n#modaRD #santodomingo';}
function pubIG(){var p=findP($('#pubSel').value);if(!p)return toast('Crea un producto primero','warn');
 var cap=$('#pubCap').value;copyText(cap);
 var ok=p.image?shareFiles(cap,[p.image]):false;
 if(!ok){downloadData(p.image,'post-'+(p.code||p.id)+'.jpg');window.open('https://www.instagram.com/','_blank');
  toast('Imagen descargada y texto copiado: en Instagram elige la foto y pega el texto','warn');}
 else toast('Elige Instagram en el panel de compartir; el texto ya está copiado para pegar','good');
 DB.posts.unshift({id:uid(),pid:p.id,caption:cap,status:'published',at:new Date().toISOString(),when:''});
 persist();renderAdmin();}
function pubWAStatus(){var p=findP($('#pubSel').value);if(!p)return toast('Crea un producto primero','warn');
 var cap=$('#pubCap').value;copyText(cap);
 var ok=p.image?shareFiles(cap,[p.image]):false;
 if(!ok)downloadData(p.image,'estado-'+(p.code||p.id)+'.jpg');
 toast(ok?'Elige WhatsApp → Mi estado para publicar':'Foto descargada y texto copiado: en WhatsApp ve a Estados → Mi estado','good');
 DB.posts.unshift({id:uid(),pid:p.id,caption:cap,status:'published',at:new Date().toISOString(),when:''});
 persist();renderAdmin();}
function renderPub(b){
 b.innerHTML='<div class="publish-grid">'+
  '<div>'+
   '<p class="pub-label">Producto</p>'+
   '<div class="field"><select class="inp" id="pubSel" onchange="renderPubPreview()">'+DB.products.map(function(x){return '<option value="'+x.id+'">'+esc(x.name)+'</option>';}).join('')+'</select></div>'+
   '<div class="pub-preview" id="pubPrev"></div>'+
   '<p class="pub-label">Caption (editable)</p>'+
   '<textarea class="caption-card" id="pubCap" rows="5"></textarea>'+
   '<p class="pub-label">Programar para</p>'+
   '<div class="field"><input class="inp" id="pubWhen" type="datetime-local" placeholder="Publicar ahora"></div>'+
   '<div style="display:flex;gap:10px"><button class="btn btn-primary" style="flex:1.4" onclick="pubIG()">'+ic('ig',16)+'Publicar en Instagram</button>'+
   '<button class="btn btn-outline" style="flex:1" onclick="pubPost(true)">'+ic('clock',16)+'Programar</button></div>'+
  '</div>'+
  '<div>'+
   '<div class="kitcard">'+
    '<h3>Kit WhatsApp Status / Difusión</h3>'+
    '<button class="btn btn-gray" onclick="copyText($(\'#pubCap\').value)">'+ic('copy',16)+'Copiar caption</button>'+
    '<button class="btn btn-wa" style="width:100%" onclick="pubWAStatus()">'+icWa(16)+'Publicar en Estado de WhatsApp</button>'+
   '</div>'+
   '<p class="pub-label">Segmento</p>'+
   '<div class="field"><select class="inp" id="pubSeg" onchange="renderPubSeg()"><option value="todos">Todos los clientes</option><option value="calzado">Compraron Calzado</option><option value="entregados">Entregados últimos 90 d</option></select></div>'+
   '<div id="pubSegList" style="margin-bottom:16px"></div>'+
   '<p class="pub-label">Historial</p>'+
   '<div id="pubList"></div>'+
  '</div>'+
 '</div>';
 if(DB.products.length){renderPubPreview();}else{$('#pubPrev').innerHTML='<p style="color:var(--text2);font-size:13px;text-align:center;padding:40px 0">Crea productos para publicar.</p>';}
 renderPubSeg();
 $('#pubList').innerHTML=DB.posts.length?DB.posts.map(function(x){return '<div class="row" style="margin-bottom:8px"><div class="row-main"><b>'+esc(x.caption.split('\n')[0])+'</b><small>'+x.status+' · '+fDT(x.at)+'</small></div><span class="pill '+(x.status==='published'?'ok':'info')+'">'+x.status+'</span></div>';}).join(''):'<small style="color:var(--text2)">Sin publicaciones aún.</small>';}
function renderPubPreview(){var p=findP($('#pubSel').value);if(!p)return;$('#pubCap').value=captionFor(p);
 $('#pubPrev').innerHTML=tileOpen(p)+(p.stock<=0?'<span class="tb out">Agotado</span>':'')+'</div>'+
  '<span class="pub-badge-l">'+esc(p.name.charAt(0).toUpperCase())+'</span>'+
  '<span class="pub-badge-r">'+p.stock+' disp.</span>';}
function pubPost(sched){var p=findP($('#pubSel').value);if(!p)return toast('Crea un producto primero','warn');var when=$('#pubWhen').value;
 if(sched&&!when)return toast('Elige fecha y hora','warn');
 DB.posts.unshift({id:uid(),pid:p.id,caption:$('#pubCap').value,status:sched?'scheduled':'published',at:new Date().toISOString(),when:when});
 persist();renderAdmin();toast(sched?'Publicación programada ⏰ (simulado)':'Publicado en Instagram ✔ (simulado)','good');}
function renderPubSeg(){var seg=$('#pubSeg').value;
 var list=DB.customers.filter(function(c){if(seg==='todos')return true;
  var os=DB.orders.filter(function(o){return o.customer_phone==='+1'+c.wa;});
  if(seg==='calzado')return os.some(function(o){return o.items.some(function(it){var p=findP(it.pid);return p&&p.cat==='Calzado';});});
  return os.some(function(o){return o.status==='entregado'&&(Date.now()-new Date(o.created_at))/86400000<=90;});});
 var p=findP($('#pubSel').value);if(!p){$('#pubSegList').innerHTML='';return;}
 $('#pubSegList').innerHTML=list.map(function(c){return '<div class="row" style="margin-bottom:8px"><div class="row-main"><b>'+esc(c.name)+'</b><small>+1 '+esc(c.wa)+'</small></div><a class="btn btn-wa" style="padding:8px 14px;font-size:12px" target="_blank" rel="noopener noreferrer" href="https://wa.me/'+c.wa+'?text='+encodeURIComponent('Hola '+c.name.split(' ')[0]+' 👋 Llegó '+p.name+' a '+fmt(p.price)+'. Míralo: '+storeUrl()+'/p/'+p.id)+'">1-tap</a></div>';}).join('')||'<small style="color:var(--text2)">Sin clientes en este segmento.</small>';}
/* config */
function renderConfig(b){var s=DB.settings;
 b.innerHTML='<div class="finance-section">'+
  '<div style="display:flex;align-items:flex-start;gap:18px;flex-wrap:wrap">'+
   '<div class="imgprev" style="width:80px;height:80px;border-radius:50%;overflow:hidden" id="logoPrev">'+(DB.logo?'<img src="'+DB.logo+'" alt="">':ic('cam',24))+'</div>'+
   '<div style="flex:1;min-width:280px">'+
    '<h3 style="font-size:17px;font-weight:700;margin-bottom:12px">Mi tienda (perfil público)</h3>'+
    '<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap"><label class="btn btn-outline" style="cursor:pointer">'+ic('cam',16)+'Subir logo<input type="file" accept="image/*" style="display:none" onchange="pickLogo(this)"></label>'+
    (DB.logo?'<button class="btn btn-outline" onclick="DB.logo=\'\';persist();renderAdmin();toast(\'Logo quitado\',\'warn\')">Quitar logo</button>':'')+'</div>'+
    '<div class="fgrid"><div class="field"><label>Nombre</label><input class="inp" id="pfName" value="'+esc(DB.name)+'"></div>'+
    '<div class="field"><label>@handle</label><input class="inp" id="pfHandle" value="'+esc(DB.handle)+'"></div></div>'+
    '<div class="fgrid"><div class="field"><label>WhatsApp (sin +1)</label><input class="inp" id="pfPhone" value="'+esc(DB.phone||'')+'" placeholder="8095550143"></div>'+
    '<div class="field"><label>Instagram de la tienda</label><input class="inp" id="pfInsta" value="'+esc(s.insta||'')+'" placeholder="@tutienda"></div></div>'+
    '<div class="field"><label>Bio estilo Instagram · <span id="bioCount">'+(DB.bio?DB.bio.length:0)+'</span>/150</label><textarea class="inp" id="pfBio" rows="3" maxlength="150" oninput="bioCount(this.value)" placeholder="Tu tienda en 3 líneas…">'+esc(DB.bio||'')+'</textarea></div>'+
    '<button class="btn btn-primary" onclick="saveProfile()">Guardar perfil</button>'+
   '</div>'+
  '</div>'+
 '</div>'+
 '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:14px">Umbrales y promociones</h3>'+
  '<div class="fgrid"><div class="field"><label>Umbral envío gratis (RD$)</label><input class="inp" id="cfgFree" type="number" value="'+s.free_threshold+'"></div>'+
  '<div class="field"><label>Umbral low-stock</label><input class="inp" id="cfgLow" type="number" value="'+s.low_stock+'"></div></div>'+
  '<div class="fgrid"><div class="field"><label>Promo: subtotal mín.</label><input class="inp" id="cfgPMin" type="number" value="'+s.promo.min+'"></div><div class="field"><label>Promo: % desc.</label><input class="inp" id="cfgPPct" type="number" value="'+s.promo.percent+'"></div></div>'+
  '<button class="btn btn-outline" onclick="saveCfg()">Guardar umbrales y promo</button>'+
 '</div>'+
 '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:14px">Métodos de envío</h3>'+
  s.shipping.map(function(m,i){return '<div class="row" style="margin-bottom:8px"><div class="row-main"><b>'+esc(m.label)+'</b><small>'+esc(m.eta)+'</small></div><input type="number" value="'+m.price+'" style="width:110px;padding:8px;border:1.5px solid var(--border);border-radius:10px;background:var(--surface2);color:var(--text)" onchange="DB.settings.shipping['+i+'].price=parseFloat(this.value)||0;persist();toast(\'Envío actualizado\',\'good\')"></div>';}).join('')+
 '</div>'+
 '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:14px">Contra entrega por zona</h3>'+
  '<div class="chips">'+['ZONA_SD','ZONA_CIBAO','ZONA_ESTE','ZONA_SUR'].map(function(z){return '<button class="chip '+(s.cod_zones.indexOf(z)!==-1?'on':'')+'" onclick="toggleCod(\''+z+'\')">'+z+'</button>';}).join('')+'</div>'+
 '</div>'+
 '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:14px">Cuentas bancarias</h3>'+
  s.payments.filter(function(p){return p.type==='transfer';}).map(function(p){var i=s.payments.indexOf(p);
   return '<div class="row" style="margin-bottom:8px"><div class="row-main"><input class="inp" value="'+esc(p.bank)+'" style="font-weight:700" onchange="DB.settings.payments['+i+'].bank=this.value;persist()">'+
   '<input class="inp" value="'+esc(p.acct)+' · '+esc(p.holder)+'" style="margin-top:6px;font-size:12px" onchange="var v=this.value.split(\'·\');DB.settings.payments['+i+'].acct=(v[0]||\'\').trim();DB.settings.payments['+i+'].holder=(v[1]||\'\').trim();persist()"></div>'+
   '<label style="font-size:11px;font-weight:700;display:flex;align-items:center;gap:6px"><input type="checkbox" '+(p.enabled?'checked':'')+' onchange="DB.settings.payments['+i+'].enabled=this.checked;persist()"> activo</label></div>';}).join('')+
 '</div>';}
function bioCount(v){var el=$('#bioCount');if(el)el.textContent=v.length;}
function pickLogo(inp){if(!inp.files||!inp.files[0])return;
 fileToDataURL(inp.files[0],256,true,function(d){DB.logo=d;persist();renderAdmin();toast('Logo actualizado ✔','good');});}
function saveProfile(){DB.name=$('#pfName').value.trim()||DB.name;DB.handle=slug($('#pfHandle').value)||DB.handle;
 DB.phone=$('#pfPhone').value.replace(/\D/g,'');DB.bio=$('#pfBio').value.slice(0,150);
 DB.settings.insta=$('#pfInsta').value.trim();
 persist();renderAdmin();renderCatalog();toast('Perfil guardado ✔','good');}
function saveCfg(){var s=DB.settings;s.free_threshold=parseFloat($('#cfgFree').value)||0;s.low_stock=parseInt($('#cfgLow').value,10)||0;
 s.promo.min=parseFloat($('#cfgPMin').value)||0;s.promo.percent=parseFloat($('#cfgPPct').value)||0;
 persist();renderAdmin();toast('Configuración guardada ✔','good');}
function toggleCod(z){var i=DB.settings.cod_zones.indexOf(z);if(i===-1)DB.settings.cod_zones.push(z);else DB.settings.cod_zones.splice(i,1);persist();renderAdmin();toast('Zonas COD actualizadas','good');}
function resetDemo(){askConfirm('¿Restaurar la tienda demo local? (No borra tu cuenta de Supabase)',function(){LSdel('cy2-stores');LSdel('cy2-cart');LSdel('cy2-session');
 STORES={'s-demo':DEMO_STORE()};persistStores();cart=[];persistCart();setSession('s-demo');applyTheme(curTheme());renderCartBadge();show('tienda');toast('Demo restaurada','good');});}

/* ═════════ CONEXIÓN SUPABASE (usa supabase-config.js) ═════════ */
var COLS = ['orders','customers','payments','receipts','reviews','posts','abandoned'];

function sbBadKey(err){ if(err && /api key|unauthorized|jwt/i.test(err.message||'')) toast('Clave API inválida: revisa supabase-config.js','warn'); }
async function sbPullStore(uid){
  var s = await sb.from('stores').select('*').eq('id', uid).single();
  if(s.error) sbBadKey(s.error);
  if(!s.data) return null; var r = s.data;
  var db = {id:r.id, name:r.name, handle:r.handle, email:r.email, bio:r.bio||'', logo:r.logo||'', phone:r.phone||'',
            settings:(r.settings && Object.keys(r.settings).length) ? r.settings : DEFSettings(),
            seq:r.seq||{order:0,receipt:0}, _anon:false};
  var ps = await sb.from('products').select('*').eq('store_id', uid);
  db.products = (ps.data||[]).map(function(x){return x.doc;});
  for(var i=0;i<COLS.length;i++){ var q = await sb.from(COLS[i]).select('*').eq('store_id', uid);
    db[COLS[i]] = (q.data||[]).map(function(x){return x.doc;}); }
  return db;
}
async function sbPullPublic(handle){
  var s = await sb.from('store_public').select('*').eq('handle', handle).single();
  if(s.error) sbBadKey(s.error);
  if(!s.data) return null; var r = s.data;
  var db = {id:r.id, name:r.name, handle:r.handle, email:'', bio:r.bio||'', logo:r.logo||'', phone:r.phone||'',
            settings:(r.settings && Object.keys(r.settings).length) ? r.settings : DEFSettings(),
            seq:{order:0,receipt:0}, _anon:true, orders:[], customers:[], payments:[], receipts:[], posts:[], abandoned:[]};
  var ps = await sb.from('products_public').select('*').eq('store_id', r.id);
  db.products = (ps.data||[]).map(function(x){return x.doc;});
  var rv = await sb.from('reviews').select('*').eq('store_id', r.id);
  db.reviews = (rv.data||[]).map(function(x){return x.doc;});
  return db;
}
var pushT = null;
function sbPush(){ if(!sb || !DB || DB._anon) return; clearTimeout(pushT); pushT = setTimeout(sbPushNow, 900); }
async function sbPushNow(){
  var uid = DB.id;
  await sb.from('stores').update({name:DB.name, handle:DB.handle, bio:DB.bio, logo:DB.logo, phone:DB.phone, settings:DB.settings, seq:DB.seq}).eq('id', uid);
  for(var i=0;i<COLS.length;i++){
    var c = COLS[i], ids = DB[c].map(function(d){return d.id;});
    var rows = DB[c].map(function(d){ var row = {id:d.id, store_id:uid, doc:d}; if(c==='orders') row.number = d.number; return row; });
    if(ids.length) await sb.from(c).delete().eq('store_id', uid).not('id', 'in', '(' + ids.join(',') + ')');
    else await sb.from(c).delete().eq('store_id', uid);
    if(rows.length) await sb.from(c).upsert(rows);
  }
  var ps = DB.products.map(function(p){ return {id:p.id, store_id:uid, doc:p}; });
  var pids = DB.products.map(function(p){return p.id;});
  if(pids.length) await sb.from('products').delete().eq('store_id', uid).not('id', 'in', '(' + pids.join(',') + ')');
  else await sb.from('products').delete().eq('store_id', uid);
  if(ps.length) await sb.from('products').upsert(ps);
}
function sbRealtime(){
  sb.channel('rt-' + DB.id).on('postgres_changes',
    {event:'*', schema:'public', table:'products', filter:'store_id=eq.' + DB.id},
    function(ev){
      if(ev.eventType === 'DELETE'){ DB.products = DB.products.filter(function(p){return p.id !== ev.old.id;}); }
      else { var doc = ev.new.doc, f = null;
        DB.products.forEach(function(p){ if(p.id === doc.id) f = p; });
        if(f){ for(var k in doc) f[k] = doc[k]; } else DB.products.unshift(doc); }
      renderCatalog(); renderCartBadge();
      if(state.view === 'admin') renderAdmin();
    }).subscribe();
}
if(SB_ON){
  persist = function(){ if(!DB) return; STORES[DB.id] = DB; persistStores(); sbPush(); };
  openAdmin = function(){ if(!DB || DB._anon){ show('auth'); toast('Inicia sesión para entrar al panel', 'warn'); return; } show('admin'); renderAdmin(); };
  loginDemo = function(){ toast('Modo conectado: crea tu tienda o inicia sesión', 'warn'); };
  resetDemo = function(){ toast('En modo conectado los datos viven en Supabase (el reset local no aplica)', 'warn'); };
  doLogin = async function(){
    var e = $('#liEmail').value.trim().toLowerCase(), p = $('#liPass').value; $('#liErr').textContent = '';
    var r = await sb.auth.signInWithPassword({email:e, password:p});
    if(r.error){ $('#liErr').textContent = 'Email o contraseña incorrectos.'; return; }
    var db = await sbPullStore(r.data.user.id);
    if(!db){ $('#liErr').textContent = 'Tu tienda aún no existe en la base.'; return; }
    DB = db; STORES[DB.id] = DB; cart = []; persistCart();
    applyTheme(curTheme()); renderCartBadge(); show('tienda'); sbRealtime();
    toast('Bienvenida/o, ' + DB.name + ' ✔', 'good');
  };
  doRegister = async function(){
    var n = $('#rgName').value.trim(), h = slug($('#rgHandle').value || $('#rgName').value),
        e = $('#rgEmail').value.trim().toLowerCase(), p = $('#rgPass').value; $('#rgErr').textContent = '';
    if(n.length < 2) return $('#rgErr').textContent = 'Escribe el nombre de tu tienda.';
    if(!/^[^@]+@[^@]+\.[^@]+$/.test(e)) return $('#rgErr').textContent = 'Email inválido.';
    if(p.length < 6) return $('#rgErr').textContent = 'Contraseña mínimo 6 caracteres.';
    var r = await sb.auth.signUp({email:e, password:p});
    if(r.error){ $('#rgErr').textContent = r.error.message; return; }
    var uid = r.data.user.id;
    var ins = await sb.from('stores').insert({id:uid, email:e, name:n, handle:h || slug(n), settings:DEFSettings(), seq:{order:0,receipt:0}});
    if(ins.error && ins.error.code !== '23505') console.warn(ins.error.message);
    if(r.data.session){
      var db = await sbPullStore(uid);
      DB = db; STORES[DB.id] = DB; cart = []; persistCart();
      applyTheme(curTheme()); renderCartBadge(); show('tienda'); sbRealtime();
      toast('🎉 Tienda creada. Agrega tu primer producto.', 'good');
      setTimeout(function(){ openAdmin(); state.tab = 'inventario'; renderAdmin(); openProd(); }, 600);
    } else {
      toast('📧 Te enviamos un correo de confirmación. Ábrelo y luego inicia sesión.', 'good');
      authTab('login');
    }
  };
  logout = async function(){ await sb.auth.signOut(); DB = null; cart = []; persistCart(); renderCartBadge(); show('auth'); toast('Sesión cerrada', 'good'); };
  confirmOrder = async function(){
    var co = state.co;
    if(!co.payId) return toast('Selecciona método de pago', 'warn');
    if(co.payId === 'transfer' && !co.bankId) return toast('Selecciona el banco', 'warn');
    var c = cartCalc(), m = shipLabel(co.shipId);
    var ship = (m.id === 'local' && c.subtotal >= DB.settings.free_threshold) ? 0 : m.price;
    var payId = co.payId === 'transfer' ? co.bankId : (co.payId === 'cod' ? 'cod' : (co.payId === 'credit' ? 'credito' : 'card_azul'));
    var dueN = new Date(); if(payId === 'credito') dueN.setDate(dueN.getDate() + 30);
    var o = {id:uid(), number:'', created_at:'', customer_name:co.name.trim(), customer_phone:'+1'+co.prefix+co.phone,
      province:co.province, shipping_method:co.shipId, shipping_cost:ship, address:co.address, pickup_point:co.pickupId, notes:co.notes,
      payment_method:payId, payment_status:'pendiente', status:'pendiente', subtotal:c.subtotal, discount:c.discount,
      total:c.net + ship, due_date:dueN.toISOString(), wa_sent_at:null,
      items:cart.map(function(l){ var p = findP(l.pid);
        return {pid:l.pid, code:p.code||'', name:p.name, variant:l.variant, qty:l.qty, unit_price:p.price, cost:p.cost||0, line_total:p.price*l.qty}; })};
    var res = await sb.rpc('place_order', {p_store:DB.id, p_order:o, p_items:o.items});
    if(res.error){ return toast(res.error.message.indexOf('STOCK') === 0 ? 'Se agotó un artículo de tu carrito 😔' : 'Error al crear el pedido', 'warn'); }
    var ord = res.data; DB.orders.unshift(ord);
    ord.items.forEach(function(it){ var p = findP(it.pid); if(p) p.stock = Math.max(0, p.stock - it.qty); });
    cart = []; persistCart(); renderCartBadge();
    LSset('cy2-last', JSON.stringify(ord.items.map(function(it){ return {pid:it.pid, variant:it.variant, qty:it.qty}; })));
    var sbEl = $('#sumbar'); if(sbEl) sbEl.remove();
    show('confirm'); renderConfirm(ord);
  };
}
/* Arranque */
(function(){
  applyTheme(LSget('cy2-theme') || 'light');
  if(!SB_ON){ if(loadSession()){ enterApp(); } else { show('auth'); renderCartBadge(); } return; }
  var h = new URLSearchParams(window.location.search).get('t') || SB_HANDLE;
  sb.auth.getUser().then(function(me){
    var uid = me.data.user && me.data.user.id;
    return (uid ? sbPullStore(uid) : sbPullPublic(h)).then(function(db){
      if(!db){ show('auth'); renderCartBadge();
        if(!uid) toast('Tienda pública no encontrada: regístrate o usa ?t=handle', 'warn');
        return; }
      DB = db; STORES[DB.id] = DB;
      renderCartBadge(); show('tienda');
      if(!DB._anon) sbRealtime();
    });
  });
})();
