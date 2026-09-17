/* CatálogoYa v3.7 · app.js — COMPLETO (preview con íconos/fotos + WhatsApp directo) */
/* 1 ICONOS */
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
 user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
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
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'};
function ic(n,s){return '<svg width="'+(s||18)+'" height="'+(s||18)+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+ICON[n]+'</svg>';}
function icWa(s){return '<svg width="'+(s||18)+'" height="'+(s||18)+'" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';}
function catIcon(c){return c==='Ropa'?'shirt':c==='Calzado'?'shoe':c==='Accesorios'?'bag':'box';}
var SUBCATS={Ropa:['Camisas','Pantalones','Vestidos','Chaquetas','Faldas'],Accesorios:['Aros','Bolsos','Pañuelos','Collares'],Calzado:['Sandalias','Botines','Sneakers','Tacón'],General:['Otros']};
var EMO={ basket:String.fromCodePoint(0x1F9FA), point:String.fromCodePoint(0x1F449),
          truck:String.fromCodePoint(0x1F69A), pin:String.fromCodePoint(0x1F4CD),
          card:String.fromCodePoint(0x1F4B3), hour:String.fromCodePoint(0x23F3),
          mag:String.fromCodePoint(0x1F50E) };
/* 2 TEMA */
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
/* 3 ESTADO */
function LSget(k){try{return window.localStorage.getItem(k);}catch(e){return null;}}
function LSset(k,v){try{window.localStorage.setItem(k,v);}catch(e){}}
function LSdel(k){try{window.localStorage.removeItem(k);}catch(e){}}
function hpass(s){var h=5381;for(var i=0;i<s.length;i++){h=((h*33)^s.charCodeAt(i))>>>0;}return h.toString(16);}
function DEFSettings(){return {free_threshold:5000,low_stock:3,promo:{min:3000,percent:10},cod_zones:['ZONA_SD'],insta:'',
 shipping:[
  {id:'uber',label:'Envío por Uber',price:250,zones:['ZONA_SD','ZONA_CIBAO'],eta:'Mismo día / 24 h',active:true},
  {id:'pickup',label:'Recogida en tienda',price:0,zones:['ZONA_SD','ZONA_CIBAO'],eta:'Horario de tienda',active:true},
  {id:'agencia',label:'Agencias de envío (Caribe Pack / Metropac / Aptpra)',price:350,zones:['ZONA_SD','ZONA_CIBAO','ZONA_ESTE','ZONA_SUR'],eta:'24–72 h',active:true},
  {id:'metro',label:'Contra entrega en estación de metro',price:150,zones:['ZONA_SD'],eta:'Mismo día',active:true,specify:'station'},
  {id:'plaza',label:'Entrega en plaza comercial',price:200,zones:['ZONA_SD','ZONA_CIBAO'],eta:'24–48 h',active:true,specify:'plaza'}],
 provinces:[
  {n:'Distrito Nacional',z:'ZONA_SD',active:true},{n:'Santo Domingo Este',z:'ZONA_SD',active:true},
  {n:'Santo Domingo Oeste',z:'ZONA_SD',active:true},{n:'Santo Domingo Norte',z:'ZONA_SD',active:true},
  {n:'Santiago',z:'ZONA_CIBAO',active:true},{n:'La Vega',z:'ZONA_CIBAO',active:true},
  {n:'Puerto Plata',z:'ZONA_CIBAO',active:true},{n:'Punta Cana',z:'ZONA_ESTE',active:true},
  {n:'La Romana',z:'ZONA_ESTE',active:true},{n:'San Pedro de Macorís',z:'ZONA_ESTE',active:true},
  {n:'San Cristóbal',z:'ZONA_SUR',active:true},{n:'Barahona',z:'ZONA_SUR',active:true}],
 pickup_points:[{city:'Distrito Nacional',label:'Tienda Aurora — Av. España #1212, Gazcue',hours:'Lun–Sáb 9am–6pm'},{city:'Santiago',label:'Punto Aurora — Calle Del Sol #45',hours:'Lun–Vie 10am–5pm'}],
 payments:[{id:'transfer_bpd',type:'transfer',bank:'Banco Popular Dominicano',acct:'Ahorros 796-21458-7',holder:'Aurora Boutique SRL',enabled:true},
  {id:'transfer_banreservas',type:'transfer',bank:'Banreservas',acct:'Corriente 001-55875-9',holder:'Aurora Boutique SRL',enabled:true},
  {id:'transfer_bhd',type:'transfer',bank:'Banco BHD',acct:'Ahorros 2210-4458-6',holder:'Aurora Boutique SRL',enabled:true},
  {id:'qik',type:'transfer',bank:'Qik (BPD)',acct:'Móvil 809-555-1234',holder:'Aurora Boutique SRL',enabled:true},
  {id:'cod',type:'cod',bank:'Efectivo contra entrega',enabled:true},
  {id:'card_azul',type:'card',bank:'Tarjeta Crédito/Débito (Azul)',enabled:true},
  {id:'credito',type:'credit',bank:'A crédito (30 días)',enabled:true}]};}
function ensureSettings(){
 if(!DB)return;
 var d=DEFSettings(); var s=DB.settings=DB.settings||{};
 if(!s.shipping||!s.shipping.length)s.shipping=d.shipping; else s.shipping.forEach(function(m){if(m.active===undefined)m.active=true;});
 if(!s.provinces||!s.provinces.length)s.provinces=d.provinces; else s.provinces.forEach(function(p){if(p.active===undefined)p.active=true;if(!p.z)p.z='ZONA_SD';});
 if(!s.payments||!s.payments.length)s.payments=d.payments; else if(!s.payments.some(function(p){return p.id==='credito';}))s.payments.push(d.payments[d.payments.length-1]);
 if(!s.pickup_points||!s.pickup_points.length)s.pickup_points=d.pickup_points;
 if(s.free_threshold===undefined)s.free_threshold=d.free_threshold;
 if(s.low_stock===undefined)s.low_stock=d.low_stock;
 if(!s.promo)s.promo=d.promo;
 if(!s.cod_zones)s.cod_zones=d.cod_zones;
 if(s.insta===undefined)s.insta='';
}
function dAgo(n){var d=new Date();d.setDate(d.getDate()-n);return d.toISOString();}
function DEMO_STORE(){
 var st=DEFSettings(); st.insta='@auroraboutique';
 return { id:'s-demo', name:'Aurora Boutique RD', handle:'auroraboutique', email:'demo@aurora.do', passHash:hpass('aurora123'),
  bio:'Moda femenina & accesorios premium ✨\n Santo Domingo · Envíos a todo el país\n🚚 Entrega 24-48h · Recogida en tienda\n💳 Transferencia · Contra entrega · Crédito\n👇 Haz tu pedido por el catálogo',
  logo:'', phone:'18095551234', seq:{order:3,receipt:2}, settings:st,
  products:[
   {id:'AU-001',code:'AU-001',subcat:'Vestidos',name:'Vestido Midi Plisado',cat:'Ropa',price:2450,cost:1300,stock:6,hue:150,image:'',desc:'Plisado fluido, corte midi.',sizes:['S','M','L'],colors:[{n:'Verde Salvia'},{n:'Negro'}]},
   {id:'AU-002',code:'AU-002',subcat:'Camisas',name:'Blusa Lino Blanca',cat:'Ropa',price:1450,cost:700,stock:8,hue:40,image:'',desc:'Lino fresco, manga corta.',sizes:['S','M','L'],colors:[{n:'Blanco'},{n:'Beige'}]},
   {id:'AU-003',code:'AU-003',subcat:'Pantalones',name:'Pantalón Palazzo Negro',cat:'Ropa',price:1850,cost:900,stock:4,hue:240,image:'',desc:'Tiro alto, pierna amplia.',sizes:['34','36','38'],colors:[{n:'Negro'}]},
   {id:'AU-004',code:'AU-004',subcat:'Chaquetas',name:'Chaqueta Denim Clásica',cat:'Ropa',price:2650,cost:1400,stock:3,hue:215,image:'',desc:'Denim rígido, corte recto.',sizes:['S','M','L'],colors:[{n:'Azul'}]},
   {id:'AU-005',code:'AU-005',subcat:'Faldas',name:'Falda Satinada Oro',cat:'Ropa',price:1650,cost:800,stock:0,hue:45,image:'',desc:'Satén brillante, corte sesgo.',sizes:['S','M'],colors:[{n:'Oro'}]},
   {id:'AU-006',code:'AU-006',subcat:'Aros',name:'Aros Perla Natural',cat:'Accesorios',price:650,cost:250,stock:15,hue:200,image:'',desc:'Perla natural, cierre plata.',sizes:[],colors:[{n:'Perla'}]},
   {id:'AU-007',code:'AU-007',subcat:'Collares',name:'Collar Capa Dorada',cat:'Accesorios',price:950,cost:400,stock:10,hue:48,image:'',desc:'Baño de oro, cadena larga.',sizes:[],colors:[{n:'Dorado'}]},
   {id:'AU-008',code:'AU-008',subcat:'Bolsos',name:'Bolso Tote Cuero',cat:'Accesorios',price:2250,cost:1100,stock:5,hue:25,image:'',desc:'Cuero legítimo, asa larga.',sizes:[],colors:[{n:'Marrón'},{n:'Negro'}]},
   {id:'AU-009',code:'AU-009',subcat:'Pañuelos',name:'Pañuelo Seda Floral',cat:'Accesorios',price:750,cost:300,stock:2,hue:330,image:'',desc:'Seda estampada 70x70.',sizes:[],colors:[{n:'Floral'}]},
   {id:'AU-010',code:'AU-010',subcat:'Sandalias',name:'Sandalia Plana Trenzada',cat:'Calzado',price:1550,cost:750,stock:7,hue:35,image:'',desc:'Trenzado a mano, suela plana.',sizes:['36','37','38','39'],colors:[{n:'Natural'}]},
   {id:'AU-011',code:'AU-011',subcat:'Botines',name:'Botín Cuero Miel',cat:'Calzado',price:3450,cost:1800,stock:3,hue:30,image:'',desc:'Cuero miel, cierre lateral.',sizes:['36','37','38','39','40'],colors:[{n:'Miel'}]},
   {id:'AU-012',code:'AU-012',subcat:'Sneakers',name:'Sneaker Urbano Blanco',cat:'Calzado',price:2850,cost:1500,stock:6,hue:0,image:'',desc:'Suela chunky, cuero blanco.',sizes:['36','37','38','39','40'],colors:[{n:'Blanco'}]},
   {id:'AU-013',code:'AU-013',subcat:'Vestidos',name:'Vestido Noche Verde',cat:'Ropa',price:3250,cost:1700,stock:4,hue:140,image:'',desc:'Escote V, caída pesada.',sizes:['S','M','L'],colors:[{n:'Verde'}]},
   {id:'AU-014',code:'AU-014',subcat:'Camisas',name:'Camisa Oversize Raya',cat:'Ropa',price:1650,cost:800,stock:0,hue:210,image:'',desc:'Oversize, raya diplomática.',sizes:['S','M','L'],colors:[{n:'Raya'}]}],
  customers:[
   {id:'c1',name:'Camila Rojas',wa:'18095540122',status:'enviado',notes:'Clienta frecuente; tonos neutros.',credit:false},
   {id:'c2',name:'Fernanda Ruiz',wa:'18493314567',status:'entregado',notes:'Mayorista: bolsos y pañuelos.',credit:true},
   {id:'c3',name:'Lucas Vega',wa:'18098123456',status:'entregado',notes:'Pedido RD-0002 pendiente de saldo.',credit:false}],
  orders:[
   {id:'o1',number:'RD-0001',created_at:dAgo(2),customer_name:'Camila Rojas',customer_phone:'+18095540122',province:'Distrito Nacional',shipping_method:'uber',shipping_cost:250,address:'Calle El Sol #12, Gazcue',pickup_point:'',specify:'',payment_method:'transfer_bpd',payment_status:'pagado',status:'entregado',subtotal:3100,discount:0,total:3350,due_date:dAgo(2),wa_sent_at:dAgo(2),proof:false,proofImage:'',items:[{pid:'AU-001',code:'AU-001',name:'Vestido Midi Plisado',variant:{Talla:'M',Color:'Verde Salvia'},qty:1,unit_price:2450,cost:1300,line_total:2450},{pid:'AU-006',code:'AU-006',name:'Aros Perla Natural',variant:{Color:'Perla'},qty:1,unit_price:650,cost:250,line_total:650}]},
   {id:'o2',number:'RD-0002',created_at:dAgo(6),customer_name:'Lucas Vega',customer_phone:'+18098123456',province:'Santiago',shipping_method:'agencia',shipping_cost:350,address:'Punto Caribe Pack Santiago',pickup_point:'',specify:'',payment_method:'credito',payment_status:'pendiente',status:'enviado',subtotal:3450,discount:0,total:3800,due_date:dAgo(-24),wa_sent_at:dAgo(6),proof:false,proofImage:'',items:[{pid:'AU-011',code:'AU-011',name:'Botín Cuero Miel',variant:{Talla:'40',Color:'Miel'},qty:1,unit_price:3450,cost:1800,line_total:3450}]},
   {id:'o3',number:'RD-0003',created_at:dAgo(1),customer_name:'Fernanda Ruiz',customer_phone:'+18493314567',province:'Distrito Nacional',shipping_method:'pickup',shipping_cost:0,address:'',pickup_point:'Tienda Aurora — Av. España #1212, Gazcue',specify:'',payment_method:'transfer_banreservas',payment_status:'pendiente',status:'pendiente',subtotal:4500,discount:0,total:4500,due_date:dAgo(1),wa_sent_at:dAgo(1),proof:false,proofImage:'',items:[{pid:'AU-008',code:'AU-008',name:'Bolso Tote Cuero',variant:{Color:'Marrón'},qty:2,unit_price:2250,cost:1100,line_total:4500}]}],
  payments:[{id:'pay1',order_id:'o1',amount:3350,method:'transfer_bpd',reference:'REF-1001',received_at:dAgo(1)}],
  receipts:[{id:'r1',number:'R-0001',order_id:'o1',issued_at:dAgo(1)}],
  reviews:[{pid:'AU-001',rating:5},{pid:'AU-008',rating:5},{pid:'AU-011',rating:4}],
  posts:[], abandoned:[] };
}
var STORES=(function(){var r=LSget('cy2-stores');if(r){try{var s=JSON.parse(r);if(s&&typeof s==='object')return s;}catch(e){}}
 return {'s-demo':DEMO_STORE()};})();
function persistStores(){LSset('cy2-stores',JSON.stringify(STORES));}
var DB=null;
function loadSession(){var id=LSget('cy2-session');if(id&&STORES[id]){DB=STORES[id];ensureSettings();return true;}DB=null;return false;}
function setSession(id){LSset('cy2-session',id);DB=STORES[id];cart=[];persistCart();}
function logout(){LSdel('cy2-session');DB=null;cart=[];persistCart();renderCartBadge();show('auth');toast('Sesión cerrada','good');}
function persist(){if(DB){STORES[DB.id]=DB;persistStores();}}
var cart=(function(){var r=LSget('cy2-cart');if(r){try{var c=JSON.parse(r);if(c&&c.length!==undefined)return c;}catch(e){}}return [];})();
function persistCart(){LSset('cy2-cart',JSON.stringify(cart));}
var state={view:'auth',cat:'Todo',subcat:'Todo',q:'',sheet:null,sel:{},qty:1,tab:'pedidos',co:null,finPeriod:30,pf:{status:'todos',q:''},shipOpen:false};
function storePhone(){return (DB&&DB.phone)||'18095550143';}
function storeUrl(){return window.location.origin+window.location.pathname;}
function catalogLink(){return storeUrl()+'?t='+DB.handle;}
/* 4 HELPERS */
function $(s){return document.querySelector(s);}
function esc(s){s=(s===null||s===undefined)?'':String(s);return s.replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function fmt(n){return 'RD$ '+new Intl.NumberFormat('es-DO',{maximumFractionDigits:0}).format(Math.round(n));}
function uid(){return Math.random().toString(36).slice(2,9);}
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');}
function findP(id){if(!DB)return null;for(var i=0;i<DB.products.length;i++)if(DB.products[i].id===id)return DB.products[i];return null;}
function findO(id){if(!DB)return null;for(var i=0;i<DB.orders.length;i++)if(DB.orders[i].id===id)return DB.orders[i];return null;}
function zoneOf(pv){
 if(DB&&DB.settings&&DB.settings.provinces){for(var i=0;i<DB.settings.provinces.length;i++){if(DB.settings.provinces[i].n===pv)return DB.settings.provinces[i].z;}}
 var P=[['Distrito Nacional','ZONA_SD'],['Santo Domingo Este','ZONA_SD'],['Santo Domingo Oeste','ZONA_SD'],['Santo Domingo Norte','ZONA_SD'],['Santiago','ZONA_CIBAO'],['La Vega','ZONA_CIBAO'],['Puerto Plata','ZONA_CIBAO'],['Punta Cana','ZONA_ESTE'],['La Romana','ZONA_ESTE'],['San Pedro de Macorís','ZONA_ESTE'],['San Cristóbal','ZONA_SUR'],['Barahona','ZONA_SUR']];
 for(var j=0;j<P.length;j++)if(P[j][0]===pv)return P[j][1];
 return 'ZONA_SD';}
function provinceOptions(){ensureSettings();return ((DB&&DB.settings&&DB.settings.provinces)||[]).filter(function(p){return p.active;});}
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
function shareStore(){var u=storeUrl()+'?t='+DB.handle;
 if(navigator.share){navigator.share({title:DB.name,url:u}).catch(function(){});}else copyText(u);}
function saveStoreContact(){
 var name=DB?DB.name:'Mi Tienda';
 var phone=storePhone();
 var vcf='BEGIN:VCARD\nVERSION:3.0\nFN:'+name+'\nN:'+name+';;;\nTEL;TYPE=CELL,VOICE:+'+phone+'\nORG:'+name+'\nURL:'+storeUrl()+'\nEND:VCARD\n';
 var blob=new Blob([vcf],{type:'text/vcard'});
 var url=URL.createObjectURL(blob);
 var a=document.createElement('a');a.href=url;a.download=name.replace(/\s+/g,'_')+'.vcf';
 document.body.appendChild(a);a.click();a.remove();
 setTimeout(function(){URL.revokeObjectURL(url);},2000);
 toast('Se abrió la ficha de contacto: tócala y GUARDAR.','good');
}
function openWaText(text,phone){window.open('https://wa.me/'+(phone||storePhone())+'?text='+encodeURIComponent(text),'_blank');}
function copyText(t){function fb(){var ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);toast('Copiado ✔','good');}
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){toast('Copiado ✔','good');},fb);}else fb();}
/* v3.7: ya NO copiamos/adjuntamos; WhatsApp muestra la vista previa del enlace */
async function sendCardToWhatsApp(imageData,text,phone){
 openWaText(text, phone);
 toast('Se abrió WhatsApp con el enlace: la vista previa muestra la tarjeta con los productos.','good');
}
function svgIconImg(name,color,px){
 return new Promise(function(res){
  var svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+px+'" height="'+px+'" viewBox="0 0 24 24" fill="none" stroke="'+color+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+ICON[name]+'</svg>';
  var url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
  var im=new Image();im.onload=function(){URL.revokeObjectURL(url);res(im);};im.onerror=function(){URL.revokeObjectURL(url);res(im);};im.src=url;});}
function toast(msg,tone,actLabel,cb){var t=document.createElement('div');t.className='toast '+(tone||'');t.textContent=msg;
 if(actLabel){var b=document.createElement('button');b.textContent=actLabel;b.onclick=function(){t.remove();if(cb)cb();};t.appendChild(b);}
 $('#toasts').appendChild(t);setTimeout(function(){t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(function(){t.remove();},300);},3400);}
var confirmCb=null;
function askConfirm(msg,cb){confirmCb=cb;openModal('<h3 style="font-size:18px;font-weight:700;margin-bottom:10px">Confirmar</h3><p style="font-size:14px;line-height:1.5;margin-bottom:18px;color:var(--text2)">'+esc(msg)+'</p><div><button class="btn btn-primary" onclick="doConfirm()">Sí, continuar</button><button class="btn btn-outline" onclick="closeModal()">Cancelar</button></div>');}
function doConfirm(){var cb=confirmCb;closeModal();if(cb)cb();}
function openModal(html){$('#modalSlot').innerHTML='<div class="modal" style="pointer-events:auto">'+html+'</div>';$('#modalBk').className='bk show';}
function closeModal(){confirmCb=null;$('#modalSlot').innerHTML='';$('#modalBk').className='bk';}
function toggleShipDetails(){var b=$('#shipDetails');if(b)b.classList.toggle('open');}
/* 5 AUTH */
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
/* 6 CARRITO + fly */
function vkey(v){var ks=Object.keys(v).sort(),out=[];ks.forEach(function(k){out.push(k+'='+v[k]);});return out.join('|');}
function addToCart(pid,variant,qty,srcEl){
 var p=findP(pid);if(!p||p.stock<=0)return;
 var key=vkey(variant),found=null;
 cart.forEach(function(l){if(l.pid===pid&&l.vkey===key)found=l;});
 if(found)found.qty=Math.min(p.stock,found.qty+qty);else cart.push({pid:pid,variant:variant,vkey:key,qty:Math.min(p.stock,qty)});
 persistCart();flyToCart(p,srcEl);}
function flyToCart(p,srcEl){
 var target=document.getElementById('fabCart');
 if(!target){renderCartBadge();return;}
 var tr=target.getBoundingClientRect(),sr=null;
 if(srcEl&&srcEl.getBoundingClientRect){sr=srcEl.getBoundingClientRect();}
 else{var t=document.querySelector('#sheetDr .tile');if(t)sr=t.getBoundingClientRect();}
 var start=sr||{left:window.innerWidth/2,top:window.innerHeight/2,width:70,height:70};
 var w=Math.min(start.width,90),h=Math.min(start.height,90);
 var img=document.createElement('div');
 img.style.cssText='position:fixed;z-index:999;pointer-events:none;border-radius:12px;background-size:cover;background-position:center;left:'+start.left+'px;top:'+start.top+'px;width:'+w+'px;height:'+h+'px;box-shadow:0 8px 20px rgba(0,0,0,.3);overflow:hidden;';
 if(p.image){img.style.backgroundImage='url('+p.image+')';}
 else{var c=tileC(p);img.style.background=c.bg;img.innerHTML='<span style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;color:'+c.fg+'">'+ic(catIcon(p.cat),28)+'</span>';}
 document.body.appendChild(img);
 var dx=(tr.left+tr.width/2)-(start.left+w/2), dy=(tr.top+tr.height/2)-(start.top+h/2);
 function land(){img.remove();landCart();}
 if(img.animate){var a=img.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:'translate('+dx+'px,'+dy+'px) scale(.15)',opacity:.2}],{duration:650,easing:'cubic-bezier(.2,.7,.3,1)'});a.onfinish=land;}
 else{img.style.transition='transform .6s cubic-bezier(.2,.7,.3,1),opacity .6s';requestAnimationFrame(function(){img.style.transform='translate('+dx+'px,'+dy+'px) scale(.15)';img.style.opacity='.2';});setTimeout(land,650);}}
function landCart(){
 renderCartBadge();
 var t=document.getElementById('fabCart');
 if(t&&t.animate){t.animate([{transform:'scale(1)'},{transform:'scale(1.15)'},{transform:'scale(1)'}],{duration:300});}
 toast('Agregado al carrito ✔','good');}
function cartCalc(){var lines=[],sub=0;cart.forEach(function(l){var p=findP(l.pid);if(!p)return;var lt=p.price*l.qty;sub+=lt;lines.push({l:l,p:p,lt:lt});});
 var disc=0;if(sub>=DB.settings.promo.min)disc=Math.round(sub*DB.settings.promo.percent/100);return {lines:lines,subtotal:sub,discount:disc,net:sub-disc};}
function renderCartBadge(){var n=0;cart.forEach(function(l){n+=l.qty;});var t='RD$ 0';
 if(DB){t=fmt(cartCalc().net);}$('#fabCart').innerHTML=ic('cart',18)+'<span>'+t+' · '+n+'</span>';}
function openCart(){$('#cartBk').className='bk show';$('#cartDr').className='drawer show';renderCart();}
function closeCart(){$('#cartBk').className='bk';$('#cartDr').className='drawer';}
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
/* 7 TARJETAS CANVAS + RICH PREVIEW + SEMÁFORO */
function wrapText(ctx,text,maxW){var words=text.split(' '),lines=[],cur='';
 for(var i=0;i<words.length;i++){var t=cur?cur+' '+words[i]:words[i];
  if(ctx.measureText(t).width>maxW&&cur){lines.push(cur);cur=words[i];}else cur=t;}
 if(cur)lines.push(cur);return lines;}
function roundRectPath(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function drawContain(ctx,im,x,y,w,h){var ir=im.width/im.height,r=w/h,dw,dh;
 if(ir>r){dw=w;dh=w/ir;}else{dh=h;dw=h*ir;}
 ctx.drawImage(im,x+(w-dw)/2,y+(h-dh)/2,dw,dh);}
/* v3.7: carga foto SI hay; si no, carga el ÍCONO de la categoría (adiós cuadros vacíos) */
function cardVisual(line){
  return new Promise(function(res){
    var out={img:null,icon:null,bg:'hsl('+line.p.hue+',55%,66%)',fg:'hsl('+line.p.hue+',45%,30%)'};
    var pending=0;
    var finish=function(){ pending--; if(pending<=0) res(out); };
    if(line.p.image){ pending++; var im=new Image(); im.onload=function(){out.img=im;finish();}; im.onerror=function(){finish();}; im.src=line.p.image; }
    else { pending++; svgIconImg(catIcon(line.p.cat), out.fg, 140).then(function(icn){ out.icon=icn; finish(); }); }
  });
}
function prodVisual(p){return cardVisual({p:p});}
/* v3.7: dibuja el recuadro con foto o, si no hay, el ícono encima del color */
function drawTile(ctx,v,x,y,w,h){
  ctx.save();ctx.beginPath();ctx.rect(x,y,w,h);ctx.clip();
  ctx.fillStyle=v.bg;ctx.fillRect(x,y,w,h);
  if(v.img){drawContain(ctx,v.img,x,y,w,h);}
  else if(v.icon){var s=Math.min(w,h)*0.5;ctx.drawImage(v.icon,x+(w-s)/2,y+(h-s)/2,s,s);}
  ctx.restore();
}
function drawAvailabilityCard(lines){
 return new Promise(function(resolve){
  Promise.all(lines.map(cardVisual)).then(function(vis){
   var W=1080,pad=88,gap=32,F='Inter, Arial, sans-serif',FS='Georgia, "Times New Roman", serif';
   var c=document.createElement('canvas'),ctx=c.getContext('2d');
   ctx.font='400 40px '+FS;var storeL=wrapText(ctx,DB.name,W-pad*2);
   ctx.font='800 84px '+F;var titleL=wrapText(ctx,'Consulta de disponibilidad',W-pad*2);
   ctx.font='400 42px '+F;var introL=wrapText(ctx,'¡Hola! Me interesan los artículos de las fotos. ¿Siguen disponibles? ¿Tienen disponibilidad para entrega?',W-pad*2);
   var cardW=(W-pad*2-gap)/2,imgH=Math.round(cardW*1.0),infoH=190,cardH=imgH+infoH;
   var rows=Math.ceil(lines.length/2);
   var y=pad,storeH=storeL.length*52,titleH=titleL.length*96,introH=introL.length*60;
   var gridY=y+storeH+28+titleH+44+introH+64;
   var gridH=rows*cardH+(rows-1)*gap;
   var H=gridY+gridH+pad;
   c.width=W;c.height=H;
   ctx.fillStyle='#15251d';roundRectPath(ctx,0,0,W,H,56);ctx.fill();
   ctx.textBaseline='top';
   ctx.fillStyle='#aec0b6';ctx.font='400 40px '+FS;storeL.forEach(function(l,i){ctx.fillText(l,pad,y+i*52);});
   ctx.fillStyle='#f4f6f4';ctx.font='800 84px '+F;titleL.forEach(function(l,i){ctx.fillText(l,pad,y+storeH+28+i*96);});
   ctx.fillStyle='#c9d5ce';ctx.font='400 42px '+F;introL.forEach(function(l,i){ctx.fillText(l,pad,y+storeH+28+titleH+44+i*60);});
   lines.forEach(function(ln,i){
     var col=i%2,row=Math.floor(i/2);
     var x=pad+col*(cardW+gap),yy=gridY+row*(cardH+gap);
     var v=vis[i];
     ctx.save();roundRectPath(ctx,x,yy,cardW,cardH,28);ctx.clip();
     drawTile(ctx,v,x,yy,cardW,imgH);
     ctx.fillStyle='#20302a';ctx.fillRect(x,yy+imgH,cardW,infoH);
     ctx.fillStyle='#ffffff';ctx.font='600 42px '+F;
     var nl=wrapText(ctx,ln.p.name,cardW-48).slice(0,2);
     nl.forEach(function(l,k){ctx.fillText(l,x+24,yy+imgH+26+k*50);});
     ctx.fillStyle='#a9bab0';ctx.font='400 40px '+F;
     ctx.fillText(fmt(ln.p.price),x+24,yy+imgH+26+nl.length*50+6);
     ctx.restore();});
   resolve(c.toDataURL('image/jpeg',0.92));});});}
function checkoutUrl(){return storeUrl()+'?t='+DB.handle+'&completar=1';}
function availabilityCaption(c, link){
  var t = 'Consulta de disponibilidad — '+DB.name+
    '\n'+EMO.basket+' Total estimado: '+fmt(c.net);
  if(link){ t += '\n'+EMO.point+' Ver los productos y completar compra:\n'+link; }
  else { t += '\n'+EMO.point+' Completa la compra aquí:\n'+checkoutUrl(); }
  t += '\n¡Quedo a la espera de su confirmación! Muchas gracias.';
  return t;
}
function drawOrderCard(o){
 return new Promise(function(resolve){
  var visP=Promise.all(o.items.map(function(it){var p=findP(it.pid);return prodVisual(p||{hue:200,image:''});}));
  Promise.all([svgIconImg('bag','#ffffff',64),svgIconImg('user','#ffffff',44),visP]).then(function(res3){
   var bagImg=res3[0],userImg=res3[1],vis=res3[2];
   var W=1080,pad=64,F='Inter, Arial, sans-serif';
   var c=document.createElement('canvas'),ctx=c.getContext('2d');
   ctx.font='700 46px '+F;
   var titleL=wrapText(ctx,'Pedido #'+o.number+' — '+DB.name,W-pad*2-90);
   var addr=(o.shipping_method==='pickup'?o.pickup_point:o.address)+', '+(o.province||'');
   var rowH=230,rowGap=24;
   var y=pad,headerH=Math.max(64,titleL.length*58);
   var by=y+headerH+32,boxH=150;
   var listLabelY=by+boxH+44,rowsY=listLabelY+60;
   var rowsH=o.items.length*rowH+(o.items.length-1)*rowGap;
   var H=rowsY+rowsH+pad;
   c.width=W;c.height=H;
   ctx.fillStyle='#0e453a';roundRectPath(ctx,0,0,W,H,44);ctx.fill();
   ctx.textBaseline='top';
   ctx.drawImage(bagImg,pad,y+2,60,60);
   ctx.fillStyle='#ffffff';ctx.font='700 46px '+F;titleL.forEach(function(l,i){ctx.fillText(l,pad+84,y+i*58);});
   ctx.fillStyle='rgba(255,255,255,.09)';roundRectPath(ctx,pad,by,W-pad*2,boxH,24);ctx.fill();
   ctx.drawImage(userImg,pad+28,by+30,44,44);
   ctx.fillStyle='#ffffff';ctx.font='600 40px '+F;
   var nameW=ctx.measureText(o.customer_name).width;
   ctx.fillText(o.customer_name,pad+92,by+30);
   ctx.fillStyle='#7cc0f4';ctx.font='400 38px '+F;
   ctx.fillText('· '+o.customer_phone.replace('+1',''),pad+92+nameW+16,by+32);
   ctx.fillStyle='rgba(255,255,255,.85)';ctx.font='400 36px '+F;
   ctx.fillText(addr,pad+92,by+88);
   ctx.fillStyle='#ffffff';ctx.font='400 40px '+F;
   ctx.fillText('Artículos ordenados ('+o.items.reduce(function(a,i){return a+i.qty;},0)+'):',pad,listLabelY);
   o.items.forEach(function(it,i){
     var yy=rowsY+i*(rowH+rowGap);
     var v=vis[i];
     ctx.save();roundRectPath(ctx,pad,yy,W-pad*2,rowH,24);ctx.clip();
     ctx.fillStyle='#f7f8f8';ctx.fillRect(pad,yy,W-pad*2,rowH);
     drawTile(ctx,v,pad,yy,rowH,rowH);
     var ix=pad+rowH+28;
     ctx.fillStyle='#1c1c1e';ctx.font='600 40px '+F;ctx.fillText(it.qty+'x '+it.name,ix,yy+34);
     var variant=Object.keys(it.variant).map(function(k){return it.variant[k];}).join(' · ');
     ctx.fillStyle='#6b6b70';ctx.font='400 34px '+F;
     if(variant)ctx.fillText(variant,ix,yy+92);
     ctx.fillStyle='#1c1c1e';ctx.font='400 38px '+F;ctx.fillText(fmt(it.unit_price),ix,yy+146);
     ctx.restore();});
   resolve(c.toDataURL('image/jpeg',0.92));});});}
function waOrderMessage(o){
 var L=[];
 L.push('Subtotal: '+fmt(o.subtotal));
 if(o.discount)L.push('Promo: −'+fmt(o.discount));
 L.push('Envío ('+shipLabel(o.shipping_method).label.split(' (')[0]+'): '+(o.shipping_cost?fmt(o.shipping_cost):'GRATIS'));
 L.push('TOTAL A PAGAR: '+fmt(o.total));
 L.push('');
 L.push(EMO.truck+' Entrega: '+shipLabel(o.shipping_method).label+(o.specify?(' ('+o.specify+')'):''));
 L.push(EMO.pin+' '+(o.shipping_method==='pickup'?o.pickup_point:o.address));
 var pm=payLabel(o.payment_method);
 L.push(EMO.card+' Pago: '+pm.bank+(pm.type==='transfer'?' · '+pm.acct+' · Titular: '+pm.holder:''));
 L.push(EMO.hour+' Estado: Pendiente');
 return L.join('\n');
}
function drawOGCard(items, heading, totalText){
  return new Promise(function(resolve){
    Promise.all(items.map(function(it){var p=(it&&it.pid)?findP(it.pid):null;return prodVisual(p||{hue:200,image:''});})).then(function(visArr){
      var W=1200,H=630,F='Inter, Arial, sans-serif';
      var c=document.createElement('canvas');c.width=W;c.height=H;var ctx=c.getContext('2d');
      ctx.fillStyle='#0e453a';ctx.fillRect(0,0,W,H);
      ctx.textBaseline='top';
      ctx.fillStyle='#f4f6f4';ctx.font='800 54px '+F;
      var hl=wrapText(ctx,heading,W-620);hl.slice(0,2).forEach(function(l,i){ctx.fillText(l,60,70+i*60);});
      ctx.fillStyle='#c9d5ce';ctx.font='400 32px '+F;ctx.fillText(totalText,60,210);
      var n=Math.min(4,visArr.length),size=190,gap=18,x0=640,y0=80;
      for(var i=0;i<n;i++){var col=i%2,row=Math.floor(i/2);var x=x0+col*(size+gap),y=y0+row*(size+gap);var v=visArr[i];
        drawTile(ctx,v,x,y,size,size);}
      ctx.fillStyle='#aec0b6';ctx.font='400 26px '+F;ctx.fillText('CatálogoYa · vista del pedido',60,560);
      resolve(c.toDataURL('image/jpeg',0.9));
    });
  });
}
async function prepareCardLink(items, heading, totalText, redirect){
  if(!SB_ON) return null;
  try{
    var og = await drawOGCard(items, heading, totalText);
    var token = uid()+uid();
    await sb.from('cards').insert({ token:token, title:heading, description:totalText, image_b64:og, redirect_url:redirect||'' });
    var link = window.location.origin + '/api/card/' + token;
    fetch(link).catch(function(){});
    fetch(link + '?img=1').catch(function(){});
    return link;
  }catch(e){ return null; }
}
function openGate(portrait, buildText, phone, linkPromise){
  openModal(
   '<div style="text-align:center">'+
   '<h3 style="font-size:18px;font-weight:800">Preparando tu tarjeta…</h3>'+
   '<img src="'+portrait+'" style="width:100%;border-radius:16px;margin:12px 0">'+
   '<div id="gateCount" style="font-size:46px;font-weight:900;line-height:1">3</div>'+
   '<p id="gateStatus" style="color:var(--text2);font-size:13px;margin-top:6px">Calentando el enlace para la vista previa…</p>'+
   '<button id="gateBtn" class="btn btn-wa" disabled style="width:100%;margin-top:14px">'+icWa(18)+'Ir a WhatsApp y enviar</button>'+
   '<button id="gateSave" class="btn btn-outline" style="width:100%;margin-top:8px" onclick="saveStoreContact()">'+ic('user',16)+'Guardar número de la tienda (1 vez)</button>'+
   '<p style="font-size:12px;color:var(--text2);margin-top:10px">Se abrirá WhatsApp directo; la vista previa muestra la tarjeta.</p>'+
   '</div>');
  var count=3;
  var ci=setInterval(function(){
    count--;
    var el=document.getElementById('gateCount');
    if(el) el.textContent = count>0 ? String(count) : '✓';
    if(count<=0) clearInterval(ci);
  },1000);
  var minDelay=new Promise(function(res){setTimeout(res,3000);});
  var lp = linkPromise || Promise.resolve(null);
  Promise.all([lp, minDelay]).then(function(resArr){
    var link=resArr[0];
    var st=document.getElementById('gateStatus');
    if(st) st.textContent = '✓ Listo. Al pulsar, WhatsApp muestra la tarjeta en la vista previa.';
    var b=document.getElementById('gateBtn');
    if(b){ b.disabled=false;
      b.onclick=function(){
        closeModal();
        sendCardToWhatsApp(portrait, buildText(link), phone);
      };
    }
  });
}
async function confirmAvailability(){
  if(!cart.length)return toast('Tu carrito está vacío','warn');
  var c=cartCalc();
  toast('Generando tarjeta…','good');
  if(document.fonts&&document.fonts.ready){try{await document.fonts.ready;}catch(e){}}
  var portrait=await drawAvailabilityCard(c.lines);
  var linkPromise=(SB_ON && typeof prepareCardLink==='function')
     ? prepareCardLink(c.lines, 'Consulta de disponibilidad — '+DB.name, c.lines.length+' artículos · Total estimado '+fmt(c.net), storeUrl()+'?t='+DB.handle+'&completar=1')
     : null;
  var buildText=function(link){ return availabilityCaption(c, link); };
  openGate(portrait, buildText, storePhone(), linkPromise);
}
async function sendOrderWA(id){
  var o=findO(id);if(!o)return;
  if(document.fonts&&document.fonts.ready){try{await document.fonts.ready;}catch(e){}}
  var portrait=await drawOrderCard(o);
  var linkPromise=(SB_ON && typeof prepareCardLink==='function')
     ? prepareCardLink(o.items, 'Pedido #'+o.number+' — '+DB.name, o.items.length+' artículos · Total '+fmt(o.total), storeUrl()+'?t='+DB.handle)
     : null;
  var buildText=function(link){ if(link){o.card_url=link; persist();} return waOrderMessage(o)+(link?('\n\n'+EMO.mag+' Ver los productos: '+link):''); };
  openGate(portrait, buildText, storePhone(), linkPromise);
  markWaSent(id);
}
function markWaSent(id){var o=findO(id);if(o&&!o.wa_sent_at){o.wa_sent_at=new Date().toISOString();persist();toast('Pedido transmitido al vendedor ✔','good');}}
/* 8 CATALOGO */
function cats(){var seen={},out=['Todo'];DB.products.forEach(function(p){if(!seen[p.cat]){seen[p.cat]=1;out.push(p.cat);}});return out;}
function renderStoreHead(){
 var ini=DB.name.slice(0,2).toUpperCase();
 var logoHtml=DB.logo?'<img src="'+DB.logo+'" alt="">':esc(ini);
 var bioLines=(DB.bio||'').split('\n').filter(function(l){return l.trim();});
 var tag=(bioLines[0]||'Moda y piezas únicas')+' · @'+DB.handle+' · Santo Domingo, RD';
 var rest=bioLines.slice(1).join('\n');
 var owner=!DB._anon;
 var shipLines=DB.settings.shipping.filter(function(m){return m.active;}).map(function(m){return '<div class="dline"><b>'+esc(m.label)+'</b><span>'+(m.price?fmt(m.price):'GRATIS')+' · '+esc(m.eta)+'</span></div>';}).join('');
 var payLines=DB.settings.payments.filter(function(p){return p.enabled;}).map(function(p){return '<div class="dline"><b>'+esc(p.bank)+'</b><span>'+(p.type==='transfer'?esc(p.acct):'')+'</span></div>';}).join('');
 $('#storeHead').innerHTML=
  '<div class="topright">'+
   (owner?'<button class="btn btn-outline" onclick="state.tab=\'config\';openAdmin()">'+ic('cam',16)+'Editar</button>':'')+
   '<button class="circle-btn" id="themeBtn" onclick="toggleTheme()"></button></div>'+
  '<div class="avatar">'+logoHtml+'<span class="odot"></span></div>'+
  '<div class="hero-name"><h1>'+esc(DB.name)+'</h1><span class="oficial">Oficial</span></div>'+
  '<div class="hero-tag">'+esc(tag)+'</div>'+
  (rest?'<div class="biocard">'+esc(rest)+'</div>':'')+
  '<div class="hero-actions">'+
   '<a class="wa-big" href="https://wa.me/'+storePhone()+'?text='+encodeURIComponent('Hola 👋 vengo del catálogo de '+DB.name)+'" target="_blank" rel="noopener noreferrer">'+icWa(22)+'WhatsApp</a>'+
   (DB.settings.insta?'<a class="sq-social" href="https://instagram.com/'+esc(String(DB.settings.insta).replace('@',''))+'" target="_blank" rel="noopener noreferrer">'+ic('ig',24)+'</a>':'')+
   '<button class="sq-social" onclick="shareStore()">'+ic('share',22)+'</button>'+
   '<button class="sq-social" onclick="saveStoreContact()" title="Guardar número de la tienda">'+ic('user',22)+'</button></div>'+
  '<div class="features">'+
   '<div class="feature">'+ic('truck',22)+'Envíos nacionales</div>'+
   '<div class="feature">'+ic('bank',22)+'Transf. bancario</div>'+
   '<div class="feature green">'+ic('clock',22)+'Stock en vivo</div></div>'+
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
 var wa='https://wa.me/'+storePhone()+'?text='+encodeURIComponent('Hola 👋 Vi *'+p.name+'*'+(p.code?' ('+p.code+')':'')+' a '+fmt(p.price)+' en tu catálogo. ¿Está disponible? '+storeUrl()+'?t='+DB.handle);
 $('#sheetBd').innerHTML='<div style="display:flex;align-items:center;margin-bottom:12px"><b style="font-size:18px;font-weight:700;flex:1">'+esc(p.name)+'</b><button class="icon-btn" onclick="closeSheet()">'+ic('x',18)+'</button></div>'+
  '<div style="border-radius:16px;overflow:hidden">'+tileOpen(p,sold?'sold':'')+(sold?'<span class="tb out">Agotado</span>':'')+'</div></div>'+
  '<p style="font-size:13px;color:var(--text2);margin:12px 0 6px">'+esc(p.cat)+(p.subcat?' · '+esc(p.subcat):'')+(p.code?' · Cód. '+esc(p.code):'')+'</p>'+
  '<p style="font-size:14px;color:var(--text2);margin-bottom:8px">'+esc(p.desc)+'</p><div class="pprice" style="margin-bottom:10px;font-size:20px">'+fmt(p.price)+'</div>'+
  (p.sizes.length?'<div class="field"><label>Talla</label><div class="chips">'+p.sizes.map(function(s){return '<button class="chip '+(state.sel['Talla']===s?'on':'')+'" onclick="state.sel[\'Talla\']=\''+s+'\';renderSheet()">'+s+'</button>';}).join('')+'</div></div>':'')+
  (p.colors.length?'<div class="field"><label>Color</label><div class="chips">'+p.colors.map(function(c){return '<button class="chip '+(state.sel['Color']===c.n?'on':'')+'" onclick="state.sel[\'Color\']=\''+esc(c.n)+'\';renderSheet()">'+esc(c.n)+'</button>';}).join('')+'</div></div>':'')+
  '<div class="field"><label>Cantidad</label><div class="stepper" style="display:inline-flex"><button onclick="state.qty=Math.max(1,state.qty-1);renderSheet()">−</button><span>'+state.qty+'</span><button onclick="state.qty=Math.min('+Math.max(1,p.stock)+',state.qty+1);renderSheet()">+</button></div> <span style="font-size:12px;color:var(--text2)">'+(sold?'sin stock':p.stock+' disponibles')+'</span></div>'+
  (sold?'<button class="btn btn-outline" disabled style="width:100%">Agotado — vuelve pronto</button>'
   :'<button class="btn btn-primary" style="width:100%" onclick="addToCart(\''+p.id+'\',state.sel,state.qty,this);closeSheet()">'+ic('cart',17)+'Agregar · '+fmt(p.price*state.qty)+'</button>'+
    '<a class="btn btn-wa" style="width:100%;margin-top:10px" href="'+wa+'" target="_blank" rel="noopener noreferrer">'+icWa(17)+'Preguntar por WhatsApp</a>');}
/* 9 CHECKOUT */
function openCheckout(){if(!cart.length){toast('Tu carrito está vacío','warn');return;}closeCart();
 state.co={step:1,name:'',prefix:'809',phone:'',province:'',shipId:'',address:'',pickupId:'',specify:'',notes:'',payId:'',bankId:'',proofImage:''};
 state.shipOpen=false;
 show('checkout');renderCheckout();}
function show(v){state.view=v;['auth','tienda','checkout','confirm','admin'].forEach(function(k){$('#v-'+k).style.display=(k===v)?'block':'none';});
 $('#bottomBar').style.display=(v==='tienda')?'flex':'none';
 var sb=$('#sumbar');if(sb&&v!=='checkout')sb.remove();
 if(v==='tienda')renderCatalog();window.scrollTo(0,0);}
function goTienda(){show('tienda');}
function shipOptions(){
 ensureSettings();
 var z=zoneOf(state.co.province);
 return (DB.settings.shipping||[]).filter(function(m){
  if(!m.active)return false;
  if(!state.co.province)return true;
  if(m.id==='pickup')return DB.settings.pickup_points.some(function(pt){return pt.city===state.co.province;})&&m.zones.indexOf(z)!==-1;
  return m.zones.indexOf(z)!==-1;});}
function pickProof(inp){if(!inp.files||!inp.files[0])return;
 fileToDataURL(inp.files[0],800,false,function(d){state.co.proofImage=d;renderCheckout();});}
function renderCheckout(){ensureSettings();var co=state.co;
 $('#steps').innerHTML='<span class="stepdot '+(co.step>1?'done':'on')+'">1</span><span class="steplab">Entrega</span><span class="stepdot '+(co.step>1?'on':'')+'">2</span><span class="steplab">Pago</span>';
 if(co.step===1){
  var opts=shipOptions();
  var chosen=null;opts.forEach(function(m){if(m.id===co.shipId)chosen=m;});
  var shipBox=state.shipOpen?('<div style="margin-top:10px">'+opts.map(function(m){
     return '<div class="opt '+(co.shipId===m.id?'on':'')+'" onclick="state.co.shipId=\''+m.id+'\';state.shipOpen=false;renderCheckout()"><b>'+esc(m.label)+'</b><span class="pr">'+(m.price?fmt(m.price):'GRATIS')+'</span><small>'+esc(m.eta)+'</small></div>';}).join('')+'</div>')
   :'<p style="font-size:12px;color:var(--text2);margin-top:6px">Toca para ver los métodos disponibles.</p>';
  var specify='';
  if(chosen&&chosen.specify){
   specify='<div class="field"><label>'+(chosen.specify==='station'?'¿Cuál estación de metro?':'¿Cuál plaza comercial?')+' *</label><input class="inp" value="'+esc(co.specify)+'" oninput="state.co.specify=this.value" placeholder="'+(chosen.specify==='station'?'Ej: Estación Juan Pablo Duarte':'Ej: Sambil')+'"></div>';
  }
  $('#coBody').innerHTML=
   '<div class="fgrid"><div class="field"><label>Nombre y apellido *</label><input class="inp" value="'+esc(co.name)+'" placeholder="María Pérez" oninput="state.co.name=this.value"></div>'+
   '<div class="field"><label>Teléfono *</label><div style="display:flex;gap:8px"><select class="inp" style="width:110px" onchange="state.co.prefix=this.value"><option value="809">+1 809</option><option value="829">+1 829</option><option value="849">+1 849</option></select><input class="inp" type="tel" maxlength="7" value="'+esc(co.phone)+'" placeholder="555-0143" oninput="this.value=this.value.replace(/\\D/g,\'\');state.co.phone=this.value"></div></div></div>'+
   '<div class="field"><label>Provincia / Zona *</label><select class="inp" onchange="state.co.province=this.value;state.co.shipId=\'\';renderCheckout()"><option value="">Selecciona…</option>'+provinceOptions().map(function(p){return '<option '+(co.province===p.n?'selected':'')+'>'+esc(p.n)+'</option>';}).join('')+'</select></div>'+
   '<div class="field"><label>Método de envío *</label>'+
    '<button type="button" class="inp" style="text-align:left;display:flex;justify-content:space-between;align-items:center" onclick="state.shipOpen=!state.shipOpen;renderCheckout()">'+
     '<span>'+(chosen?esc(chosen.label)+' · '+(chosen.price?fmt(chosen.price):'GRATIS'):'Selecciona método de envío')+'</span><span>'+ic('chev',16)+'</span></button>'+
    shipBox+'</div>'+specify+
   (co.shipId==='pickup'?'<div class="field"><label>Punto de recogida *</label><select class="inp" onchange="state.co.pickupId=this.value"><option value="">Selecciona…</option>'+DB.settings.pickup_points.filter(function(pt){return pt.city===co.province;}).map(function(pt){return '<option '+(co.pickupId===pt.label?'selected':'')+' value="'+esc(pt.label)+'">'+esc(pt.label)+' · '+esc(pt.hours)+'</option>';}).join('')+'</select></div>':'')+
   '<div class="field"><label>Notas para el repartidor</label><input class="inp" value="'+esc(co.notes)+'" oninput="state.co.notes=this.value" placeholder="Portón negro, llamar al llegar…"></div>'+
   '<div style="padding-bottom:20px"><button class="btn btn-primary" style="width:100%" onclick="toStep2()">Continuar al pago →</button></div>';
  renderSumBar(false);
 }else{
  var z=zoneOf(co.province),codOk=DB.settings.cod_zones.indexOf(z)!==-1;
  var tr=DB.settings.payments.filter(function(p){return p.type==='transfer'&&p.enabled;});
  var cod=DB.settings.payments.filter(function(p){return p.type==='cod'&&p.enabled;})[0];
  var card=DB.settings.payments.filter(function(p){return p.type==='card'&&p.enabled;})[0];
  var h='<div class="field"><label>Método de pago *</label>';
  h+='<div class="opt '+(co.payId==='transfer'?'on':'')+'" onclick="state.co.payId=\'transfer\';if(!state.co.bankId&&'+tr.length+')state.co.bankId=\''+tr[0].id+'\';renderCheckout()"><b>🏦 Transferencia bancaria</b><small>BPD · Banreservas · BHD · Qik</small></div>';
  if(co.payId==='transfer'){
   h+='<div class="field" style="margin-left:10px"><label>Cuenta a la que transferirás (toca para elegir, copia los datos)</label>'+
    tr.map(function(t){return '<div class="opt '+(co.bankId===t.id?'on':'')+'" onclick="state.co.bankId=\''+t.id+'\';renderCheckout()"><b>'+esc(t.bank)+'</b><small>'+esc(t.acct)+' · Titular: '+esc(t.holder)+'</small>'+
     '<button type="button" class="btn btn-outline" style="margin-top:8px;padding:6px 12px;font-size:12px" onclick="event.stopPropagation();copyText(\''+esc(t.bank+' '+t.acct+' '+t.holder)+'\')">'+ic('copy',14)+'Copiar</button></div>';}).join('')+'</div>';
  }
  h+=cod?'<div class="opt '+(co.payId==='cod'?'on':'')+(codOk?'':' off')+'" onclick="'+(codOk?'state.co.payId=\'cod\';renderCheckout()':'')+'"><b>💵 Efectivo contra entrega</b><small>'+(codOk?'Pagas al recibir (Santo Domingo)':'⛔ Solo disponible en Santo Domingo')+'</small></div>':'';
  h+=card?'<div class="opt '+(co.payId==='card'?'on':'')+'" onclick="state.co.payId=\'card\';renderCheckout()"><b>💳 Tarjeta (Azul)</b><small>Pago seguro procesado por Azul · demo simulada</small></div>':'';
  h+='<div class="opt '+(co.payId==='credit'?'on':'')+'" onclick="state.co.payId=\'credit\';renderCheckout()"><b>📝 A crédito</b><small>Pagas en 30 días · coordinado con la tienda</small></div>';
  if(co.payId==='transfer'||co.payId==='credit'){
   h+='<div class="field"><label>📎 Anexar comprobante de pago (opcional)</label><input type="file" accept="image/*" onchange="pickProof(this)">'+
    (co.proofImage?'<div style="margin-top:8px;display:flex;align-items:center;gap:8px"><img src="'+co.proofImage+'" style="width:56px;height:56px;object-fit:cover;border-radius:10px"><button type="button" class="btn btn-outline" style="padding:6px 10px;font-size:12px" onclick="state.co.proofImage=\'\';renderCheckout()">Quitar</button></div>':'')+'</div>';
  }
  h+='</div><div style="padding-bottom:20px"><button class="btn btn-outline" onclick="state.co.step=1;renderCheckout()">← Volver</button><button class="btn btn-primary" onclick="confirmOrder()">Confirmar y Enviar Pedido ✔</button></div>';
  $('#coBody').innerHTML=h;renderSumBar(true);}}
function renderSumBar(withShip){var c=cartCalc(),ship=0;
 if(withShip&&state.co.shipId){var m=shipLabel(state.co.shipId);ship=(m.id==='local'&&c.subtotal>=DB.settings.free_threshold)?0:m.price;}
 var thumbs=cart.slice(0,4).map(function(l){var p=findP(l.pid);
  return '<div style="width:38px;height:38px;border-radius:9px;background-size:cover;background-position:center;background-color:var(--surface2);'+((p&&p.image)?'background-image:url('+p.image+')':'')+';border:1px solid var(--border);flex:none"></div>';}).join('');
 var old=$('#sumbar');if(old)old.remove();
 var el=document.createElement('div');el.className='sumbar';el.id='sumbar';
 el.innerHTML='<div class="in"><div style="display:flex;gap:6px;margin-right:12px;flex:none">'+thumbs+'</div><div class="tot">Subtotal '+fmt(c.subtotal)+(c.discount?' − promo '+fmt(c.discount):'')+(withShip?' · Envío '+(ship?fmt(ship):'GRATIS'):'')+'<b>Total '+fmt(c.net+ship)+'</b></div>'+
  (withShip?'<button class="btn btn-primary" onclick="confirmOrder()">Confirmar y Enviar Pedido ✔</button>':'<button class="btn btn-primary" onclick="openCheckout()">Continuar →</button>')+'</div>';
 document.body.appendChild(el);}
function toStep2(){var co=state.co;
 if(co.name.trim().length<3)return toast('Escribe tu nombre completo','warn');
 if(co.phone.length!==7)return toast('Teléfono: 7 dígitos después del prefijo','warn');
 if(!co.province)return toast('Selecciona tu provincia','warn');
 if(!co.shipId)return toast('Selecciona método de envío','warn');
 var chosen=shipOptions().filter(function(m){return m.id===co.shipId;})[0];
 if(chosen&&chosen.specify&&!co.specify.trim())return toast('Indica '+(chosen.specify==='station'?'la estación':'la plaza'),'warn');
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
  province:co.province,shipping_method:co.shipId,shipping_cost:ship,address:co.address,pickup_point:co.pickupId,specify:co.specify,notes:co.notes,
  payment_method:payId,payment_status:'pendiente',status:'pendiente',subtotal:c.subtotal,discount:c.discount,total:c.net+ship,due_date:due.toISOString(),wa_sent_at:null,
  proof:!!co.proofImage,proofImage:co.proofImage||'',
  items:cart.map(function(l){var p=findP(l.pid);return {pid:l.pid,code:p.code||'',name:p.name,variant:l.variant,qty:l.qty,unit_price:p.price,cost:p.cost,line_total:p.price*l.qty};})};
 DB.orders.unshift(o);
 o.items.forEach(function(it){var p=findP(it.pid);if(p)p.stock=Math.max(0,p.stock-it.qty);});
 DB.abandoned=DB.abandoned.filter(function(a){return a.phone!==o.customer_phone;});
 cart=[];persistCart();renderCartBadge();persist();
 LSset('cy2-last',JSON.stringify(o.items.map(function(it){return {pid:it.pid,variant:it.variant,qty:it.qty};})));
 var sb=$('#sumbar');if(sb)sb.remove();
 show('confirm');renderConfirm(o);}
function renderConfirm(o){var pm=payLabel(o.payment_method),msg=waOrderMessage(o);
 var banks=DB.settings.payments.filter(function(p){return p.type==='transfer'&&p.enabled;});
 $('#confBody').innerHTML='<div class="conf-card" style="text-align:center"><span class="pill ok">Pedido creado</span>'+
  '<h1 style="font-size:38px;font-weight:900;margin:12px 0 6px;letter-spacing:-.02em">#'+o.number+'</h1>'+
  '<p style="color:var(--text2);font-size:15px">Total '+fmt(o.total)+' · '+esc(pm.bank)+'</p>'+
  '<div style="margin:16px 0"><button class="btn btn-wa" style="width:100%" onclick="sendOrderWA(\''+o.id+'\')">'+icWa(18)+'Enviar pedido por WhatsApp</button></div>'+
  '<p style="font-size:13px;color:var(--text2)">Se abrirá WhatsApp directo; la vista previa muestra la tarjeta con los productos.</p></div>'+
  (pm.type==='transfer'?'<div class="conf-card"><b style="font-size:17px;font-weight:700">Datos para tu transferencia</b><div style="margin-top:12px">'+
   banks.map(function(b){return '<div class="bankline"><b>'+esc(b.bank)+'</b> '+esc(b.acct)+' · '+esc(b.holder)+'<button onclick="copyText(\''+esc(b.bank+' '+b.acct+' '+b.holder)+'\')">COPIAR</button></div>';}).join('')+'</div>':'')+
  (o.proofImage?'<div class="conf-card"><b style="font-size:15px;font-weight:700">📎 Comprobante adjunto</b><div style="margin-top:8px"><img src="'+o.proofImage+'" style="width:72px;height:72px;object-fit:cover;border-radius:12px"></div></div>':'')+
  '<div class="conf-card"><b style="font-size:17px;font-weight:700">Texto que se enviará (de subtotal hacia abajo)</b><div class="msgbox" style="margin-top:12px">'+esc(msg)+'</div>'+
  '<div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-outline" onclick="copyText(decodeURIComponent(\''+encodeURIComponent(msg)+'\'))">'+ic('copy',16)+'Copiar texto</button>'+
  '<a class="btn btn-outline" href="https://wa.me/'+storePhone()+'?text='+encodeURIComponent('Hola, consulta sobre mi pedido #'+o.number)+'" target="_blank" rel="noopener noreferrer">'+icWa(16)+'Soporte</a>'+
  '<button class="btn btn-primary" onclick="goTienda()">Seguir comprando</button></div></div>';}
/* 10 DEEP-LINK */
(function(){
 if(window.location.search.indexOf('completar=')===-1)return;
 var tries=0;
 var t=setInterval(function(){
  tries++;
  if(DB&&state.view==='tienda'){clearInterval(t);
   setTimeout(function(){if(cart.length){openCheckout();}else{toast('Tu carrito está vacío: agrega productos para completar tu pedido','warn');}},500);
  }else if(tries>60){clearInterval(t);}
 },250);
})();
