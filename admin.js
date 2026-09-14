/* CatálogoYa v2.8 · admin.js — panel + Supabase + arranque */
var TABS=[['pedidos','receipt','Pedidos'],['inventario','box','Inventario'],['finanzas','chart','Márgenes'],['cxc','wallet','CxC'],['publicar','mega','Publicar'],['config','gear','Config']];
function openAdmin(){if(!DB)return;show('admin');renderAdmin();}
function renderAdmin(){if(!DB)return;ensureSettings();
 var logoHtml=DB.logo?'<img src="'+DB.logo+'" alt="">':esc(DB.name.slice(0,2).toUpperCase());
 $('#adminHead').innerHTML=
  '<div class="avatar-sm">'+logoHtml+'</div>'+
  '<div><b>'+esc(DB.name)+'</b><div class="live-txt">Tiempo real activo</div></div>'+
  '<div class="right">'+
   '<button class="btn btn-primary" style="border-radius:999px;padding:13px 26px" onclick="openManualSale()">Nueva venta</button>'+
   '<button class="circle-btn" id="themeBtn2" onclick="toggleTheme()"></button>'+
   '<button class="circle-btn" onclick="logout()" title="Cerrar sesión">'+ic('exit',16)+'</button>'+
   '<button class="circle-btn" onclick="goTienda()" title="Ver tienda">'+ic('eye',16)+'</button></div>';
 var tb=$('#themeBtn2');if(tb)tb.innerHTML=ic(curTheme()==='dark'?'sun':'moon',18);
 $('#adminTabs').innerHTML=TABS.map(function(t){return '<button class="utab '+(state.tab===t[0]?'on':'')+'" onclick="state.tab=\''+t[0]+'\';renderAdmin()">'+t[2]+'</button>';}).join('');
 var b=$('#adminBody');
 if(state.tab==='pedidos')renderPedidos(b);else if(state.tab==='inventario')renderInv(b);
 else if(state.tab==='finanzas')renderFin(b);else if(state.tab==='cxc')renderCxC(b);
 else if(state.tab==='publicar')renderPub(b);else renderConfig(b);}
/* ── PEDIDOS ── */
function renderPedidos(b){var pf=state.pf;
 var list=DB.orders.filter(function(o){return (pf.status==='todos'||o.status===pf.status)&&((o.number+o.customer_name).toLowerCase().indexOf(pf.q.toLowerCase())!==-1);});
 var pend=DB.orders.filter(function(o){return o.status==='pendiente';}).length;
 var hoy=DB.orders.filter(function(o){return o.created_at.slice(0,10)===new Date().toISOString().slice(0,10);}).length;
 b.innerHTML='<div class="kpis"><div class="kpi"><b>'+hoy+'</b><span>Pedidos hoy</span></div><div class="kpi"><b class="amber">'+pend+'</b><span>Pendientes</span></div><div class="kpi"><b>'+DB.orders.length+'</b><span>Total</span></div><div class="kpi"><b class="'+(DB.abandoned.length?'amber':'ok')+'">'+DB.abandoned.length+'</b><span>Carritos abiertos</span></div></div>'+
  '<div class="searchwrap" style="margin:0 0 14px">'+ic('search',16)+'<input class="inp" placeholder="Buscar # o cliente" value="'+esc(pf.q)+'" oninput="state.pf.q=this.value;renderAdmin()"></div>'+
  '<div class="chips" style="margin-bottom:14px">'+['todos','pendiente','enviado','entregado','cancelado'].map(function(s){return '<button class="chip '+(pf.status===s?'on':'')+'" onclick="state.pf.status=\''+s+'\';renderAdmin()">'+s+'</button>';}).join('')+'</div>'+
  list.map(function(o){
   var thumbs=o.items.slice(0,3).map(function(it){var p=findP(it.pid);return '<div class="othumb" style="'+((p&&p.image)?'background-image:url('+p.image+')':'background:'+tileC(p||{hue:200}).bg)+'"></div>';}).join('');
   return '<div class="row" onclick="openOrder(\''+o.id+'\')" style="cursor:pointer"><div class="othumbs">'+thumbs+'</div><div class="row-main"><b>#'+o.number+' · '+esc(o.customer_name)+'</b><small>'+fDT(o.created_at)+' · '+o.items.length+' ítem'+(o.items.length>1?'s':'')+'<br>'+esc(payLabel(o.payment_method).bank)+'</small></div>'+
   '<b style="font-size:16px">'+fmt(o.total)+'</b><span class="pill '+o.status+'">'+o.status+'</span></div>';}).join('')+
  (DB.abandoned.length?'<h3 style="margin:20px 0 10px;font-size:17px;font-weight:700">🛒 Carritos abandonados</h3>'+DB.abandoned.map(function(a,i){return '<div class="row"><div class="row-main"><b>'+esc(a.name||a.phone)+'</b><small>'+a.items.length+' líneas · '+fDT(a.at)+'</small></div><a class="btn btn-wa" style="padding:8px 14px;font-size:12px" target="_blank" rel="noopener noreferrer" href="https://wa.me/'+a.phone.replace('+','')+'?text='+encodeURIComponent('Hola '+(a.name||'')+' 👋 Guardamos tu carrito. Retómalo aquí: '+storeUrl())+'">Recordar</a><button class="icon-btn" onclick="DB.abandoned.splice('+i+',1);persist();renderAdmin()">'+ic('x',16)+'</button></div>';}).join(''):'');}
function openOrder(id){var o=findO(id);$('#orderBk').className='bk show';$('#orderDr').className='drawer show';
 var bal=balanceOf(o);
 $('#ordHd').innerHTML='<div style="display:flex;align-items:center;gap:8px"><b style="font-size:18px;font-weight:700;flex:1">#'+o.number+'</b><span class="pill '+o.status+'">'+o.status+'</span><button class="icon-btn" onclick="closeOrder()">'+ic('x',18)+'</button></div>';
 $('#ordBd').innerHTML='<p style="font-size:13px;color:var(--text2);margin-bottom:12px">'+fDT(o.created_at)+' · '+esc(o.customer_name)+' · '+esc(o.customer_phone)+'</p>'+
  o.items.map(function(it){var p=findP(it.pid);var v=Object.keys(it.variant).map(function(k){return it.variant[k];}).join(' · ');
   return '<div class="cline">'+(p?swHTML(p):'')+'<div class="row-main"><b style="font-size:14px">'+esc(it.name)+(it.code?' <span style="color:var(--text2);font-size:11px">'+esc(it.code)+'</span>':'')+'</b><small>'+(v?esc(v)+' · ':'')+it.qty+' × '+fmt(it.unit_price)+' · costo '+fmt(it.cost)+'</small></div><b style="font-size:14px">'+fmt(it.line_total)+'</b></div>';}).join('')+
  '<div style="font-size:13px;margin:12px 0;color:var(--text2)">Subtotal '+fmt(o.subtotal)+(o.discount?' · promo −'+fmt(o.discount):'')+' · Envío '+(o.shipping_cost?fmt(o.shipping_cost):'GRATIS')+' · <b style="color:var(--text)">Total '+fmt(o.total)+'</b></div>'+
  '<div style="font-size:13px;margin-bottom:10px;color:var(--text2)">🚚 '+esc(shipLabel(o.shipping_method).label)+(o.specify?' ('+esc(o.specify)+')':'')+'<br>📍 '+esc(o.shipping_method==='pickup'?o.pickup_point:o.address)+'<br>💳 '+esc(payLabel(o.payment_method).bank)+(o.proofImage?' · 📎 <a href="'+o.proofImage+'" target="_blank" rel="noopener noreferrer" style="color:var(--blue)">ver comprobante</a>':'')+'</div>'+
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
/* ── VENTA MANUAL ── */
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
  province:'Venta manual',shipping_method:'pickup',shipping_cost:0,address:'',pickup_point:'',specify:'',notes:'Registrada manualmente en el panel',
  payment_method:ms.pay,payment_status:ms.paid?'pagado':'pendiente',status:ms.status,subtotal:sub,discount:0,total:sub,due_date:due.toISOString(),wa_sent_at:new Date().toISOString(),proof:false,proofImage:'',items:items};
 items.forEach(function(it){var p=findP(it.pid);if(p)p.stock=Math.max(0,p.stock-it.qty);});
 DB.orders.unshift(o);
 if(ms.paid){DB.payments.push({id:uid(),order_id:o.id,amount:sub,method:ms.pay,reference:'Venta manual',received_at:new Date().toISOString()});
  DB.seq.receipt+=1;DB.receipts.unshift({id:uid(),number:'R-'+('000'+DB.seq.receipt).slice(-4),order_id:o.id,issued_at:new Date().toISOString()});}
 persist();closeModal();renderAdmin();toast('Venta #'+o.number+' registrada ✔','good');}
/* ── INVENTARIO ── */
function renderInv(b){
 var mg=function(p){return p.price>0?Math.round((p.price-p.cost)/p.price*100):0;};
 b.innerHTML='<div class="invcount"><span>'+DB.products.length+' productos</span><button onclick="openProd()">'+ic('plus',18)+'Nuevo producto</button></div>'+
 DB.products.map(function(p){
  var sold=p.stock<=0,low=p.stock>0&&p.stock<=DB.settings.low_stock;
  var pill=sold?'<span class="pill out">Agotado</span>':low?'<span class="pill low">Poco · '+p.stock+' uds</span>':'<span class="pill ok">'+p.stock+' uds</span>';
  var c=tileC(p);
  return '<div class="invrow">'+
   '<div class="thumb" style="'+(p.image?'background-image:url('+p.image+')':'background:'+c.bg+';color:'+c.fg)+'">'+(p.image?'':ic(catIcon(p.cat),22))+'</div>'+
   '<div style="flex:1;min-width:0"><h4>'+esc(p.name)+' · '+esc(p.code||'—')+'</h4>'+
    '<div class="meta">'+esc(p.cat)+(p.subcat?' · '+esc(p.subcat):'')+' · '+fmt(p.price)+'</div>'+
    '<div class="line">'+pill+'<span class="mg">margen '+mg(p)+'%</span>'+
     '<div class="stepper"><button onclick="bump(\''+p.id+'\',-1)">−</button><span>'+p.stock+'</span><button onclick="bump(\''+p.id+'\',1)">+</button></div></div></div>'+
   '<button class="icon-btn" title="Publicar en Instagram" onclick="pubProductIG(\''+p.id+'\')">'+ic('ig',16)+'</button>'+
   '<button class="icon-btn" title="Publicar en WhatsApp" onclick="pubProductWA(\''+p.id+'\')">'+icWa(16)+'</button>'+
   '<button class="icon-btn" onclick="openProd(\''+p.id+'\')">'+ic('edit',16)+'</button><button class="icon-btn" onclick="delProd(\''+p.id+'\')">'+ic('trash',16)+'</button></div>';}).join('');}
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
/* ── FINANZAS ── */
function renderFin(b){var days=state.finPeriod,cut=new Date();cut.setDate(cut.getDate()-days);
 var os=DB.orders.filter(function(o){return o.status!=='cancelado'&&new Date(o.created_at)>=cut;});
 var rev=0,cogs=0,per={};
 os.forEach(function(o){o.items.forEach(function(it){rev+=it.line_total;cogs+=it.cost*it.qty;
  var e=per[it.pid]||{name:it.name,units:0,rev:0,cost:0};e.units+=it.qty;e.rev+=it.line_total;e.cost+=it.cost*it.qty;per[it.pid]=e;});});
 var gain=rev-cogs,mg=rev?Math.round(gain/rev*100):0;
 var weeks=[0,0,0,0];os.forEach(function(o){var d=(Date.now()-new Date(o.created_at))/86400000;var w=3-Math.floor(d/7);if(w>=0&&w<4)weeks[w]+=o.subtotal;});
 var mx=Math.max.apply(null,weeks.concat([1]));
 var rows=Object.keys(per).map(function(k){return per[k];}).sort(function(a,b2){return (b2.rev-b2.cost)-(a.rev-a.cost);});
 b.innerHTML='<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:16px">Rendimiento del período</h3>'+
  '<div class="chips" style="margin-bottom:16px">'+[7,30,90,365].map(function(d){return '<button class="chip '+(days===d?'on':'')+'" onclick="state.finPeriod='+d+';renderAdmin()">Últimos '+d+' d</button>';}).join('')+'</div>'+
  '<div class="kpis" style="margin:0"><div class="kpi"><b>'+fmt(rev)+'</b><span>Ingresos</span></div><div class="kpi"><b>'+fmt(cogs)+'</b><span>COGS</span></div><div class="kpi"><b class="ok">'+fmt(gain)+'</b><span>Ganancia</span></div><div class="kpi"><b class="'+(mg<15?'red':'ok')+'">'+mg+'%</b><span>Margen</span></div></div></div>'+
  '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:12px">Tendencia semanal (4 sem)</h3><div class="bars">'+weeks.map(function(w){return '<i style="height:'+Math.round(w/mx*100)+'%"></i>';}).join('')+'</div></div>'+
  '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:12px">Detalle por producto</h3>'+
  '<div style="overflow-x:auto"><table class="fin"><tr><th>Producto</th><th>Uds</th><th>Ingresos</th><th>COGS</th><th>Ganancia</th><th>Margen</th></tr>'+
  rows.map(function(r){var m=r.rev?Math.round((r.rev-r.cost)/r.rev*100):0;
   return '<tr><td style="font-weight:600">'+esc(r.name)+'</td><td>'+r.units+'</td><td>'+fmt(r.rev)+'</td><td>'+fmt(r.cost)+'</td><td><b>'+fmt(r.rev-r.cost)+'</b></td><td><span class="pill '+(m>=40?'ok':m<15?'out':'low')+'">'+m+'%</span></td></tr>';}).join('')+'</table></div></div>';}
/* ── CxC ── */
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
   return '<div class="cxccard"><div style="display:flex;align-items:flex-start"><div style="flex:1"><h4>'+esc(o.customer_name)+'</h4><div class="num">#'+o.number+'</div></div><span class="pill '+(k==='Al día'?'ok':'out')+'">'+kl+'</span></div>'+
    '<div class="due">Vence '+fDate(o.due_date)+' · saldo '+fmt(balanceOf(o))+'</div>'+
    '<div class="btns"><button class="btn btn-outline" onclick="payModal(\''+o.id+'\')">'+ic('wallet',16)+'Cobrar</button>'+
    '<a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://wa.me/'+o.customer_phone.replace('+','')+'?text='+encodeURIComponent('Hola '+o.customer_name.split(' ')[0]+' 👋 Recordatorio: saldo '+fmt(balanceOf(o))+' del pedido #'+o.number+'.')+'">'+ic('bell',16)+'Recordar</a></div></div>';}).join('')||'<p style="color:var(--text2);text-align:center;padding:30px 0">🎉 No hay saldos de crédito abiertos.</p>';}
/* ── PUBLICAR ── */
function captionFor(p){var vs=[];if(p.sizes.length)vs.push('Tallas '+p.sizes.join('–'));if(p.colors.length)vs.push(p.colors.map(function(c){return c.n;}).join('/'));
 return '🖤 '+p.name+' — '+fmt(p.price)+'\n'+vs.join(' · ')+' · '+(p.stock>0?'✔ Disponible':'⛔ Agotado')+'\n📲 Pídelo: '+storeUrl()+'?t='+DB.handle+'\n#modaRD #santodomingo';}
function pubProductIG(id){var p=findP(id);if(!p)return;
 var cap=captionFor(p);copyText(cap);
 var file=null;if(p.image){try{file=dataURLtoFile(p.image,'post.jpg');}catch(e){}}
 if(file&&navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],text:cap,title:'CatálogoYa'}).catch(function(){});toast('Elige Instagram: la foto va con el texto copiado','good');}
 else{downloadData(p.image,'post-'+(p.code||p.id)+'.jpg');window.open('https://www.instagram.com/','_blank');toast('Foto descargada y texto copiado: pégalo en Instagram','warn');}}
function pubProductWA(id){var p=findP(id);if(!p)return;
 var cap=captionFor(p);
 var file=null;if(p.image){try{file=dataURLtoFile(p.image,'estado.jpg');}catch(e){}}
 if(file&&navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],text:cap,title:'CatálogoYa'}).catch(function(){});toast('Elige WhatsApp → Mi estado','good');}
 else{downloadData(p.image,'estado-'+(p.code||p.id)+'.jpg');openWaText(cap,storePhone());toast('Foto descargada; se abrió WhatsApp para adjuntar','warn');}}
function renderPub(b){
 b.innerHTML='<div class="publish-grid">'+
  '<div><p class="pub-label">Producto</p>'+
   '<div class="field"><select class="inp" id="pubSel" onchange="renderPubPreview()">'+DB.products.map(function(x){return '<option value="'+x.id+'">'+esc(x.name)+'</option>';}).join('')+'</select></div>'+
   '<div class="pub-preview" id="pubPrev"></div>'+
   '<p class="pub-label">Caption (editable)</p><textarea class="caption-card" id="pubCap" rows="5"></textarea>'+
   '<p class="pub-label">Programar para</p><div class="field"><input class="inp" id="pubWhen" type="datetime-local" placeholder="Publicar ahora"></div>'+
   '<div style="display:flex;gap:10px"><button class="btn btn-primary" style="flex:1.4" onclick="pubIG()">'+ic('ig',16)+'Publicar en Instagram</button>'+
   '<button class="btn btn-outline" style="flex:1" onclick="pubPost(true)">'+ic('clock',16)+'Programar</button></div></div>'+
  '<div><div class="kitcard"><h3>Kit WhatsApp Status / Difusión</h3>'+
    '<button class="btn btn-gray" onclick="copyText($(\'#pubCap\').value)">'+ic('copy',16)+'Copiar caption</button>'+
    '<button class="btn btn-wa" style="width:100%" onclick="pubWAStatus()">'+icWa(16)+'Publicar en Estado de WhatsApp</button></div>'+
   '<p class="pub-label">Segmento</p><div class="field"><select class="inp" id="pubSeg" onchange="renderPubSeg()"><option value="todos">Todos los clientes</option><option value="calzado">Compraron Calzado</option><option value="entregados">Entregados últimos 90 d</option></select></div>'+
   '<div id="pubSegList" style="margin-bottom:16px"></div>'+
   '<p class="pub-label">Historial</p><div id="pubList"></div></div></div>';
 if(DB.products.length){renderPubPreview();}else{$('#pubPrev').innerHTML='<p style="color:var(--text2);font-size:13px;text-align:center;padding:40px 0">Crea productos para publicar.</p>';}
 renderPubSeg();
 $('#pubList').innerHTML=DB.posts.length?DB.posts.map(function(x){return '<div class="row" style="margin-bottom:8px"><div class="row-main"><b>'+esc(x.caption.split('\n')[0])+'</b><small>'+x.status+' · '+fDT(x.at)+'</small></div><span class="pill '+(x.status==='published'?'ok':'info')+'">'+x.status+'</span></div>';}).join(''):'<small style="color:var(--text2)">Sin publicaciones aún.</small>';}
function renderPubPreview(){var p=findP($('#pubSel').value);if(!p)return;$('#pubCap').value=captionFor(p);
 $('#pubPrev').innerHTML=tileOpen(p)+(p.stock<=0?'<span class="tb out">Agotado</span>':'')+'</div>'+
  '<span class="pub-badge-l">'+esc(p.name.charAt(0).toUpperCase())+'</span>'+
  '<span class="pub-badge-r">'+p.stock+' disp.</span>';}
function pubIG(){var p=findP($('#pubSel').value);if(!p)return toast('Crea un producto primero','warn');
 var cap=$('#pubCap').value;copyText(cap);
 var file=null;if(p.image){try{file=dataURLtoFile(p.image,'post.jpg');}catch(e){}}
 if(file&&navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],text:cap,title:'CatálogoYa'}).catch(function(){});toast('Elige Instagram: la foto va con el texto copiado','good');}
 else{downloadData(p.image,'post-'+(p.code||p.id)+'.jpg');window.open('https://www.instagram.com/','_blank');toast('Foto descargada y texto copiado: pégalo en Instagram','warn');}
 DB.posts.unshift({id:uid(),pid:p.id,caption:cap,status:'published',at:new Date().toISOString(),when:''});
 persist();renderAdmin();}
function pubPost(sched){var p=findP($('#pubSel').value);if(!p)return toast('Crea un producto primero','warn');var when=$('#pubWhen').value;
 if(sched&&!when)return toast('Elige fecha y hora','warn');
 DB.posts.unshift({id:uid(),pid:p.id,caption:$('#pubCap').value,status:sched?'scheduled':'published',at:new Date().toISOString(),when:when});
 persist();renderAdmin();toast(sched?'Publicación programada ⏰ (simulado)':'Publicado en Instagram ✔ (simulado)','good');}
function pubWAStatus(){var p=findP($('#pubSel').value);if(!p)return toast('Crea un producto primero','warn');
 var cap=$('#pubCap').value;copyText(cap);
 var ok=p.image?shareFiles(cap,[p.image]):false;
 if(!ok)downloadData(p.image,'estado-'+(p.code||p.id)+'.jpg');
 toast(ok?'Elige WhatsApp → Mi estado para publicar':'Foto descargada y texto copiado: en WhatsApp ve a Estados → Mi estado','good');
 DB.posts.unshift({id:uid(),pid:p.id,caption:cap,status:'published',at:new Date().toISOString(),when:''});
 persist();renderAdmin();}
function renderPubSeg(){var seg=$('#pubSeg').value;
 var list=DB.customers.filter(function(c){if(seg==='todos')return true;
  var os=DB.orders.filter(function(o){return o.customer_phone==='+1'+c.wa;});
  if(seg==='calzado')return os.some(function(o){return o.items.some(function(it){var p=findP(it.pid);return p&&p.cat==='Calzado';});});
  return os.some(function(o){return o.status==='entregado'&&(Date.now()-new Date(o.created_at))/86400000<=90;});});
 var p=findP($('#pubSel').value);if(!p){$('#pubSegList').innerHTML='';return;}
 $('#pubSegList').innerHTML=list.map(function(c){return '<div class="row" style="margin-bottom:8px"><div class="row-main"><b>'+esc(c.name)+'</b><small>+1 '+esc(c.wa)+'</small></div><a class="btn btn-wa" style="padding:8px 14px;font-size:12px" target="_blank" rel="noopener noreferrer" href="https://wa.me/'+c.wa+'?text='+encodeURIComponent('Hola '+c.name.split(' ')[0]+' 👋 Llegó '+p.name+' a '+fmt(p.price)+'. Míralo: '+storeUrl()+'?t='+DB.handle)+'">1-tap</a></div>';}).join('')||'<small style="color:var(--text2)">Sin clientes en este segmento.</small>';}
/* ── CONFIG ── */
function renderConfig(b){ensureSettings();var s=DB.settings;
 b.innerHTML='<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:10px">🔗 Link público del catálogo</h3>'+
  '<p style="font-size:13px;color:var(--text2);margin-bottom:10px">Este link abre SOLO el catálogo (sin panel). Ponlo en tu bio de Instagram o envíaselo a clientes.</p>'+
  '<div class="bankline"><b style="word-break:break-all">'+catalogLink()+'</b><button onclick="copyText(catalogLink())">COPIAR</button></div>'+
  '<a class="btn btn-outline" href="'+catalogLink()+'" target="_blank" rel="noopener noreferrer">'+ic('eye',16)+'Ver catálogo</a></div>'+
 '<div class="finance-section"><div style="display:flex;align-items:flex-start;gap:18px;flex-wrap:wrap">'+
   '<div class="imgprev" style="width:80px;height:80px;border-radius:50%;overflow:hidden" id="logoPrev">'+(DB.logo?'<img src="'+DB.logo+'" alt="">':ic('cam',24))+'</div>'+
   '<div style="flex:1;min-width:280px"><h3 style="font-size:17px;font-weight:700;margin-bottom:12px">Mi tienda (perfil público)</h3>'+
    '<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap"><label class="btn btn-outline" style="cursor:pointer">'+ic('cam',16)+'Subir logo<input type="file" accept="image/*" style="display:none" onchange="pickLogo(this)"></label>'+
    (DB.logo?'<button class="btn btn-outline" onclick="DB.logo=\'\';persist();renderAdmin();toast(\'Logo quitado\',\'warn\')">Quitar logo</button>':'')+'</div>'+
    '<div class="fgrid"><div class="field"><label>Nombre</label><input class="inp" id="pfName" value="'+esc(DB.name)+'"></div>'+
    '<div class="field"><label>@handle</label><input class="inp" id="pfHandle" value="'+esc(DB.handle)+'"></div></div>'+
    '<div class="fgrid"><div class="field"><label>WhatsApp (sin +1)</label><input class="inp" id="pfPhone" value="'+esc(DB.phone||'')+'" placeholder="8095550143"></div>'+
    '<div class="field"><label>Instagram de la tienda</label><input class="inp" id="pfInsta" value="'+esc(s.insta||'')+'" placeholder="@tutienda"></div></div>'+
    '<div class="field"><label>Bio estilo Instagram · <span id="bioCount">'+(DB.bio?DB.bio.length:0)+'</span>/150</label><textarea class="inp" id="pfBio" rows="3" maxlength="150" oninput="bioCount(this.value)" placeholder="Tu tienda en 3 líneas…">'+esc(DB.bio||'')+'</textarea></div>'+
    '<button class="btn btn-primary" onclick="saveProfile()">Guardar perfil</button></div></div></div>'+
 '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:12px">🚚 Métodos de envío (edita nombre, precio, etiqueta y actívalos)</h3>'+
  s.shipping.map(function(m,i){return '<div class="row" style="margin-bottom:10px;align-items:flex-start"><div class="row-main">'+
    '<input class="inp" style="margin-bottom:6px" value="'+esc(m.label)+'" onchange="shipField('+i+',\'label\',this.value)">'+
    '<div style="display:flex;gap:8px;flex-wrap:wrap"><input type="number" value="'+m.price+'" style="width:110px;padding:8px;border:1.5px solid var(--border);border-radius:10px;background:var(--surface2);color:var(--text)" onchange="shipField('+i+',\'price\',parseFloat(this.value)||0)">'+
    '<input class="inp" style="flex:1;min-width:140px" value="'+esc(m.eta)+'" onchange="shipField('+i+',\'eta\',this.value)"></div></div>'+
    '<label style="font-size:12px;font-weight:700;display:flex;align-items:center;gap:6px"><input type="checkbox" '+(m.active?'checked':'')+' onchange="shipActive('+i+',this.checked)"> Activo</label></div>';}).join('')+'</div>'+
 '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:12px">📍 Provincias del formulario (edita y activa)</h3>'+
  s.provinces.map(function(p,i){return '<div class="row" style="margin-bottom:8px"><input class="inp" style="flex:1" value="'+esc(p.n)+'" onchange="provField('+i+',\'n\',this.value)">'+
    '<select class="inp" style="width:130px" onchange="provField('+i+',\'z\',this.value)">'+['ZONA_SD','ZONA_CIBAO','ZONA_ESTE','ZONA_SUR'].map(function(z){return '<option '+(p.z===z?'selected':'')+'>'+z+'</option>';}).join('')+'</select>'+
    '<label style="font-size:12px;font-weight:700;display:flex;align-items:center;gap:6px"><input type="checkbox" '+(p.active?'checked':'')+' onchange="provActive('+i+',this.checked)"> Activa</label>'+
    '<button class="icon-btn" onclick="provDel('+i+')">'+ic('x',16)+'</button></div>';}).join('')+
  '<div style="display:flex;gap:8px;margin-top:8px"><input class="inp" id="newProv" placeholder="Nueva provincia…" style="flex:1"><select class="inp" id="newProvZ" style="width:130px"><option>ZONA_SD</option><option>ZONA_CIBAO</option><option>ZONA_ESTE</option><option>ZONA_SUR</option></select><button class="btn btn-outline" onclick="provAdd()">'+ic('plus',16)+'</button></div></div>'+
 '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:12px">💵 Contra entrega disponible en zonas</h3>'+
  '<div class="chips">'+['ZONA_SD','ZONA_CIBAO','ZONA_ESTE','ZONA_SUR'].map(function(z){return '<button class="chip '+(s.cod_zones.indexOf(z)!==-1?'on':'')+'" onclick="toggleCod(\''+z+'\')">'+z+'</button>';}).join('')+'</div></div>'+
 '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:14px">Umbrales y promociones</h3>'+
  '<div class="fgrid"><div class="field"><label>Umbral envío gratis (RD$)</label><input class="inp" id="cfgFree" type="number" value="'+s.free_threshold+'"></div>'+
  '<div class="field"><label>Umbral low-stock</label><input class="inp" id="cfgLow" type="number" value="'+s.low_stock+'"></div></div>'+
  '<div class="fgrid"><div class="field"><label>Promo: subtotal mín.</label><input class="inp" id="cfgPMin" type="number" value="'+s.promo.min+'"></div><div class="field"><label>Promo: % desc.</label><input class="inp" id="cfgPPct" type="number" value="'+s.promo.percent+'"></div></div>'+
  '<button class="btn btn-outline" onclick="saveCfg()">Guardar umbrales y promo</button></div>'+
 '<div class="finance-section"><h3 style="font-size:17px;font-weight:700;margin-bottom:14px">Cuentas bancarias</h3>'+
  s.payments.filter(function(p){return p.type==='transfer';}).map(function(p){var i=s.payments.indexOf(p);
   return '<div class="row" style="margin-bottom:8px"><div class="row-main"><input class="inp" value="'+esc(p.bank)+'" style="font-weight:700" onchange="DB.settings.payments['+i+'].bank=this.value;persist()">'+
   '<input class="inp" value="'+esc(p.acct)+' · '+esc(p.holder)+'" style="margin-top:6px;font-size:12px" onchange="var v=this.value.split(\'·\');DB.settings.payments['+i+'].acct=(v[0]||\'\').trim();DB.settings.payments['+i+'].holder=(v[1]||\'\').trim();persist()"></div>'+
   '<label style="font-size:11px;font-weight:700;display:flex;align-items:center;gap:6px"><input type="checkbox" '+(p.enabled?'checked':'')+' onchange="DB.settings.payments['+i+'].enabled=this.checked;persist()"> activo</label></div>';}).join('')+'</div>';}
function shipField(i,k,v){DB.settings.shipping[i][k]=v;persist();toast('Método actualizado ✔','good');}
function shipActive(i,v){DB.settings.shipping[i].active=v;persist();renderAdmin();toast(v?'Método activado':'Método desactivado','good');}
function provField(i,k,v){DB.settings.provinces[i][k]=v;persist();toast('Provincia actualizada ✔','good');}
function provActive(i,v){DB.settings.provinces[i].active=v;persist();toast(v?'Provincia activada':'Provincia desactivada','good');}
function provDel(i){DB.settings.provinces.splice(i,1);persist();renderAdmin();toast('Provincia eliminada','warn');}
function provAdd(){var n=$('#newProv').value.trim();if(!n)return toast('Escribe el nombre','warn');
 DB.settings.provinces.push({n:n,z:$('#newProvZ').value,active:true});persist();renderAdmin();toast('Provincia agregada ✔','good');}
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
/* ── SUPABASE ── */
var COLS=['orders','customers','payments','receipts','reviews','posts','abandoned'];
function sbBadKey(err){if(err&&/api key|unauthorized|jwt/i.test(err.message||''))toast('Clave API inválida: revisa supabase-config.js','warn');}
async function sbPullStore(uid){
 var s=await sb.from('stores').select('*').eq('id',uid).single();
 if(s.error)sbBadKey(s.error);
 if(!s.data)return null;var r=s.data;
 var db={id:r.id,name:r.name,handle:r.handle,email:r.email,bio:r.bio||'',logo:r.logo||'',phone:r.phone||'',
  settings:(r.settings&&Object.keys(r.settings).length)?r.settings:DEFSettings(),
  seq:r.seq||{order:0,receipt:0},_anon:false};
 var ps=await sb.from('products').select('*').eq('store_id',uid);
 db.products=(ps.data||[]).map(function(x){return x.doc;});
 for(var i=0;i<COLS.length;i++){var q=await sb.from(COLS[i]).select('*').eq('store_id',uid);
  db[COLS[i]]=(q.data||[]).map(function(x){return x.doc;});}
 return db;}
async function sbPullPublic(handle){
 var s=await sb.from('store_public').select('*').eq('handle',handle).single();
 if(s.error)sbBadKey(s.error);
 if(!s.data)return null;var r=s.data;
 var db={id:r.id,name:r.name,handle:r.handle,email:'',bio:r.bio||'',logo:r.logo||'',phone:r.phone||'',
  settings:(r.settings&&Object.keys(r.settings).length)?r.settings:DEFSettings(),
  seq:{order:0,receipt:0},_anon:true,orders:[],customers:[],payments:[],receipts:[],posts:[],abandoned:[]};
 var ps=await sb.from('products_public').select('*').eq('store_id',r.id);
 db.products=(ps.data||[]).map(function(x){return x.doc;});
 var rv=await sb.from('reviews').select('*').eq('store_id',r.id);
 db.reviews=(rv.data||[]).map(function(x){return x.doc;});
 return db;}
var pushT=null;
function sbPush(){if(!sb||!DB||DB._anon)return;clearTimeout(pushT);pushT=setTimeout(sbPushNow,900);}
async function sbPushNow(){
 var uid=DB.id;
 await sb.from('stores').update({name:DB.name,handle:DB.handle,bio:DB.bio,logo:DB.logo,phone:DB.phone,settings:DB.settings,seq:DB.seq}).eq('id',uid);
 for(var i=0;i<COLS.length;i++){
  var c=COLS[i],ids=DB[c].map(function(d){return d.id;});
  var rows=DB[c].map(function(d){var row={id:d.id,store_id:uid,doc:d};if(c==='orders')row.number=d.number;return row;});
  if(ids.length)await sb.from(c).delete().eq('store_id',uid).not('id','in','('+ids.join(',')+')');
  else await sb.from(c).delete().eq('store_id',uid);
  if(rows.length)await sb.from(c).upsert(rows);}
 var ps=DB.products.map(function(p){return {id:p.id,store_id:uid,doc:p};});
 var pids=DB.products.map(function(p){return p.id;});
 if(pids.length)await sb.from('products').delete().eq('store_id',uid).not('id','in','('+pids.join(',')+')');
 else await sb.from('products').delete().eq('store_id',uid);
 if(ps.length)await sb.from('products').upsert(ps);}
function sbRealtime(){
 sb.channel('rt-'+DB.id).on('postgres_changes',
  {event:'*',schema:'public',table:'products',filter:'store_id=eq.'+DB.id},
  function(ev){
   if(ev.eventType==='DELETE'){DB.products=DB.products.filter(function(p){return p.id!==ev.old.id;});}
   else{var doc=ev.new.doc,f=null;
    DB.products.forEach(function(p){if(p.id===doc.id)f=p;});
    if(f){for(var k in doc)f[k]=doc[k];}else DB.products.unshift(doc);}
   renderCatalog();renderCartBadge();
   if(state.view==='admin')renderAdmin();}).subscribe();}
if(SB_ON){
 persist=function(){if(!DB)return;STORES[DB.id]=DB;persistStores();sbPush();};
 openAdmin=function(){if(!DB||DB._anon){show('auth');toast('Inicia sesión para entrar al panel','warn');return;}show('admin');renderAdmin();};
 loginDemo=function(){toast('Modo conectado: crea tu tienda o inicia sesión','warn');};
 resetDemo=function(){toast('En modo conectado los datos viven en Supabase (el reset local no aplica)','warn');};
 doLogin=async function(){
  var e=$('#liEmail').value.trim().toLowerCase(),p=$('#liPass').value;$('#liErr').textContent='';
  var r=await sb.auth.signInWithPassword({email:e,password:p});
  if(r.error){$('#liErr').textContent='Email o contraseña incorrectos.';return;}
  var db=await sbPullStore(r.data.user.id);
  if(!db){$('#liErr').textContent='Tu tienda aún no existe en la base.';return;}
  DB=db;STORES[DB.id]=DB;cart=[];persistCart();ensureSettings();
  applyTheme(curTheme());renderCartBadge();show('tienda');sbRealtime();
  toast('Bienvenida/o, '+DB.name+' ✔','good');};
 doRegister=async function(){
  var n=$('#rgName').value.trim(),h=slug($('#rgHandle').value||$('#rgName').value),
   e=$('#rgEmail').value.trim().toLowerCase(),p=$('#rgPass').value;$('#rgErr').textContent='';
  if(n.length<2)return $('#rgErr').textContent='Escribe el nombre de tu tienda.';
  if(!/^[^@]+@[^@]+\.[^@]+$/.test(e))return $('#rgErr').textContent='Email inválido.';
  if(p.length<6)return $('#rgErr').textContent='Contraseña mínimo 6 caracteres.';
  var r=await sb.auth.signUp({email:e,password:p});
  if(r.error){$('#rgErr').textContent=r.error.message;return;}
  var uid=r.data.user.id;
  var ins=await sb.from('stores').insert({id:uid,email:e,name:n,handle:h||slug(n),settings:DEFSettings(),seq:{order:0,receipt:0}});
  if(ins.error&&ins.error.code!=='23505')console.warn(ins.error.message);
  if(r.data.session){
   var db=await sbPullStore(uid);
   DB=db;STORES[DB.id]=DB;cart=[];persistCart();ensureSettings();
   applyTheme(curTheme());renderCartBadge();show('tienda');sbRealtime();
   toast('🎉 Tienda creada. Agrega tu primer producto.','good');
   setTimeout(function(){openAdmin();state.tab='inventario';renderAdmin();openProd();},600);
  }else{
   toast('📧 Te enviamos un correo de confirmación. Ábrelo y luego inicia sesión.','good');
   authTab('login');}};
 logout=async function(){await sb.auth.signOut();DB=null;cart=[];persistCart();renderCartBadge();show('auth');toast('Sesión cerrada','good');};
 confirmOrder=async function(){
  var co=state.co;
  if(!co.payId)return toast('Selecciona método de pago','warn');
  if(co.payId==='transfer'&&!co.bankId)return toast('Selecciona el banco','warn');
  var c=cartCalc(),m=shipLabel(co.shipId);
  var ship=(m.id==='local'&&c.subtotal>=DB.settings.free_threshold)?0:m.price;
  var payId=co.payId==='transfer'?co.bankId:(co.payId==='cod'?'cod':(co.payId==='credit'?'credito':'card_azul'));
  var dueN=new Date();if(payId==='credito')dueN.setDate(dueN.getDate()+30);
  var o={id:uid(),number:'',created_at:'',customer_name:co.name.trim(),customer_phone:'+1'+co.prefix+co.phone,
   province:co.province,shipping_method:co.shipId,shipping_cost:ship,address:co.address,pickup_point:co.pickupId,specify:co.specify,notes:co.notes,
   payment_method:payId,payment_status:'pendiente',status:'pendiente',subtotal:c.subtotal,discount:c.discount,
   total:c.net+ship,due_date:dueN.toISOString(),wa_sent_at:null,
   proof:!!co.proofImage,proofImage:co.proofImage||'',
   items:cart.map(function(l){var p=findP(l.pid);
    return {pid:l.pid,code:p.code||'',name:p.name,variant:l.variant,qty:l.qty,unit_price:p.price,cost:p.cost||0,line_total:p.price*l.qty};})};
  var res=await sb.rpc('place_order',{p_store:DB.id,p_order:o,p_items:o.items});
  if(res.error){return toast(res.error.message.indexOf('STOCK')===0?'Se agotó un artículo de tu carrito 😔':'Error al crear el pedido','warn');}
  var ord=res.data;DB.orders.unshift(ord);
  ord.items.forEach(function(it){var p=findP(it.pid);if(p)p.stock=Math.max(0,p.stock-it.qty);});
  cart=[];persistCart();renderCartBadge();
  LSset('cy2-last',JSON.stringify(ord.items.map(function(it){return {pid:it.pid,variant:it.variant,qty:it.qty};})));
  var sbEl=$('#sumbar');if(sbEl)sbEl.remove();
  show('confirm');renderConfirm(ord);};
}
/* ARRANQUE */
(function(){
 applyTheme(LSget('cy2-theme')||'light');
 if(!SB_ON){if(loadSession()){enterApp();}else{show('auth');renderCartBadge();}return;}
 var h=new URLSearchParams(window.location.search).get('t')||SB_HANDLE;
 sb.auth.getUser().then(function(me){
  var uid=me.data.user&&me.data.user.id;
  return (uid?sbPullStore(uid):sbPullPublic(h)).then(function(db){
   if(!db){show('auth');renderCartBadge();
    if(!uid)toast('Tienda pública no encontrada: regístrate o usa ?t=handle','warn');
    return;}
   DB=db;STORES[DB.id]=DB;ensureSettings();
   renderCartBadge();show('tienda');
   if(!DB._anon)sbRealtime();});});
})();
