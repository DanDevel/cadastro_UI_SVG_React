import logo from './logo.svg';
import './App.css';

function animaForm1() {
  // alert("ok...");

  const groupForm = document.getElementById("form_subForm1");
  groupForm.style.transition = "transform 0.5s ease-in-out";
  groupForm.style.transform = "translateY(200px)";

  // bt avancar
  const groupFormAvancar = document.getElementById("Group_buttonAvancar");
  groupFormAvancar.style.transition = "transform 0.5s ease-in-out";
  groupFormAvancar.style.transform = "translateY(200px)";



}

function verificaCPFInserido(){

  if(document.getElementById("senha_de_email").innerHTML.length == 11){
      alert("inseriu um cpf...!")
      console.log('insewriu um  CPF....');
  };

}

function App() {

  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  width="770" height="770" viewBox="0 0 770 425">
  <defs>
    <filter id="Rectangle_23" x="16" y="5" width="754" height="420" filterUnits="userSpaceOnUse">
      <feOffset dx="8" dy="8" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="21.5" result="blur"/>
      <feFlood floodColor="#002b57" floodOpacity="0.278"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_21" x="0" y="0" width="754" height="420" filterUnits="userSpaceOnUse">
      <feOffset dx="-8" dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="21.5" result="blur-2"/>
      <feFlood floodColor="#fff"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_15" x="63.5" y="49.5" width="643" height="309" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-3"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-3"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Cadastro">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-4"/>
      <feFlood floodOpacity="0.302" result="color"/>
      <feComposite operator="out" in="SourceGraphic" in2="blur-4"/>
      <feComposite operator="in" in="color"/>
      <feComposite operator="in" in2="SourceGraphic"/>
    </filter>
    <filter id="Path_7" x="63.5" y="55.5" width="643" height="321" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-5"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-5"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="ativa_Invest">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-6"/>
      <feFlood floodOpacity="0.302" result="color-2"/>
      <feComposite operator="out" in="SourceGraphic" in2="blur-6"/>
      <feComposite operator="in" in="color-2"/>
      <feComposite operator="in" in2="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_19" x="409.5" y="306.5" width="278" height="98" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-7"/>
      <feFlood floodColor="#0e25bc" floodOpacity="0.4"/>
      <feComposite operator="in" in2="blur-7"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="form1_ativa" transform="translate(-409.5 -83.5)">

    <g transform="matrix(1, 0, 0, 1, 409.5, 83.5)" filter="url(#Rectangle_23)">

      <rect id="Rectangle_23-2" data-name="Rectangle 23" width="625" height="291" rx="28" transform="translate(72.5 61.5)" fill="#fff"/>

    </g>
    <g transform="matrix(1, 0, 0, 1, 409.5, 83.5)" filter="url(#Rectangle_21)">
      <rect id="Rectangle_21-2" data-name="Rectangle 21" width="625" height="291" rx="28" transform="translate(72.5 61.5)" fill="#fff"/>
    </g>
    <g id="form_subForm1" transform="translate(0 -3)">

      <g transform="matrix(1, 0, 0, 1, 409.5, 86.5)" filter="url(#Rectangle_15)">

        <rect id="Rectangle_15-2" data-name="Rectangle 15" width="625" height="291" rx="28" transform="translate(72.5 55.5)" fill="#fff"/>

      </g>
      <text id="RESULTADO" data-name="RESULTADO:" transform="translate(601 293)" fontSize="12" fontFamily="SegoeUI, Segoe UI"><tspan x="-70.989" y="69">Ao se cadastrar voce concorda com nosso termo de uso. </tspan></text>
      <g id="Rectangle_28" data-name="Rectangle 28" transform="translate(524 297)" fill="#fff" stroke="#dfdfdf" strokeWidth="1">
      <foreignObject x="0" y="0" width="220" height="43">
          <input type="text" style={{ width: '100%', height: '100%', padding: '5px', border:'none'  }} placeholder="seu@e-mail.com" />
        </foreignObject>
        <rect x="0.5" y="0.5" width="219" height="42" rx="8.5" fill="none"/>
      </g>
      <text id="Valor do empréstimo:" data-name="Informe seu e-mail:" transform="translate(601 293)" fontSize="17" fontFamily="SegoeUI, Segoe UI"><tspan x="-74.989" y="0">Informe seu e-mail:</tspan></text>
      <g id="Rectangle_29" data-name="Rectangle 29" transform="translate(759 297)" fill="#fff" stroke="#dfdfdf" strokeWidth="1">

      <foreignObject x="0" y="0" width="185" height="43">
          <input id="senha_de_email" type="text" style={{ width: '100%', height: '100%', padding: '5px', border:'none' }} placeholder="********" onChange={verificaCPFInserido} />
        </foreignObject>
        <rect x="0.5" y="0.5" width="186" height="42" rx="8.5" fill="none"/>
      </g>
      <text id="CPF_tomador" data-name="Para quem:" transform="translate(780 293)" fontSize="17" fontFamily="SegoeUI, Segoe UI"><tspan x="-15.185" y="0">Crie uma senha:</tspan></text>
      <g id="Rectangle_30" data-name="Rectangle 30" transform="translate(955 297)" fill="#fff" stroke="#dfdfdf" strokeWidth="1">


      <foreignObject x="0" y="0" width="110" height="43">
          <input type="date" style={{ width: '90%', height: '100%', padding: '5px' , border:'none' }}  />
        </foreignObject>
        <rect x="0.5" y="0.5" width="109" height="42" rx="8.5" fill="none"/>
      </g>
      <text id="Data Nasc.:_" data-name="Data Nasc.:" transform="translate(945 293)" fontSize="17" fontFamily="SegoeUI, Segoe UI"><tspan x="17.334" y="0">Data Nasc.:</tspan></text>
      <rect id="Rectangle_31" data-name="Rectangle 31" width="294" height="84" rx="42" transform="translate(797 165)" fill="#f2f2f2"/>
      <g data-type="innerShadowGroup">
        <text id="Cadastro-2" data-name="Cadastro" transform="translate(947 223)" fill="#cccccc" fontSize="33" fontFamily="SegoeUI, Segoe UI"><tspan x="-87.092" y="0">Cadastro</tspan></text>
        <g transform="matrix(1, 0, 0, 1, 409.5, 86.5)" filter="url(#Cadastro)">
          <text id="Cadastro-3" data-name="Cadastro" transform="translate(537.5 136.5)" fill="#fff" fontSize="33" fontFamily="SegoeUI, Segoe UI"><tspan x="-87.092" y="0">Cadastro</tspan></text>
        </g>
      </g>
    </g>
    <g id="GroupForm_etapa1">
      <g transform="matrix(1, 0, 0, 1, 409.5, 83.5)" filter="url(#Path_7)">
        <g id="Path_7-2" data-name="Path 7" transform="translate(72.5 61.5)" fill="#fff">
          <path d="M 310.6179504394531 302.5 L 28 302.5 C 24.28730773925781 302.5 20.68592262268066 301.7730102539062 17.29592323303223 300.3391418457031 C 14.02130794525146 298.9540710449219 11.08023071289062 296.9711608886719 8.554538726806641 294.4454650878906 C 6.028846263885498 291.9197692871094 4.045923233032227 288.9786987304688 2.66084623336792 285.7040710449219 C 1.226999998092651 282.3140869140625 0.5 278.7127075195312 0.5 275 L 0.5 28 C 0.5 24.28730773925781 1.226999998092651 20.68592262268066 2.66084623336792 17.29592323303223 C 4.045923233032227 14.02130794525146 6.028846263885498 11.08023071289062 8.554538726806641 8.554538726806641 C 11.08023071289062 6.028846263885498 14.02130794525146 4.045923233032227 17.29592323303223 2.66084623336792 C 20.68592262268066 1.226999998092651 24.28730773925781 0.5 28 0.5 L 597 0.5 C 600.7127075195312 0.5 604.3140869140625 1.226999998092651 607.7041015625 2.66084623336792 C 610.9786987304688 4.045923233032227 613.9197387695312 6.028846263885498 616.4454345703125 8.554538726806641 C 618.9711303710938 11.08023071289062 620.9541015625 14.02130794525146 622.3391723632812 17.29592323303223 C 623.7730102539062 20.68592262268066 624.5 24.28730773925781 624.5 28 L 624.5 210 C 624.5 213.7126922607422 623.7730102539062 217.3140716552734 622.3391723632812 220.7040710449219 C 620.9541015625 223.9786987304688 618.9711303710938 226.9197692871094 616.4454345703125 229.4454650878906 C 613.9197387695312 231.9711608886719 610.9786987304688 233.9540710449219 607.7041015625 235.3391571044922 C 604.3140869140625 236.7729949951172 600.7127075195312 237.5 597 237.5 L 376.1771545410156 237.5 C 364.2526245117188 237.5 353.3753051757812 240.9483795166016 343.8473815917969 247.7493133544922 C 336.2384643554688 253.1804656982422 329.4736022949219 260.7479858398438 323.7409362792969 270.2415466308594 C 318.6487731933594 278.67431640625 315.3293151855469 287.1001586914062 313.4413146972656 292.6836242675781 C 311.7596435546875 297.65673828125 310.8821716308594 301.3262329101562 310.6179504394531 302.5 Z" stroke="none"/>
          <path d="M 28 1 C 24.35455322265625 1 20.81866455078125 1.713775634765625 17.49072265625 3.12139892578125 C 14.275634765625 4.481231689453125 11.3880615234375 6.42816162109375 8.9080810546875 8.9080810546875 C 6.42816162109375 11.38809204101562 4.481201171875 14.27560424804688 3.12139892578125 17.49069213867188 C 1.7137451171875 20.81869506835938 1 24.35455322265625 1 28 L 1 275 C 1 278.6454467773438 1.7137451171875 282.1813049316406 3.12139892578125 285.5093078613281 C 4.481201171875 288.7243957519531 6.42816162109375 291.6119384765625 8.9080810546875 294.0919189453125 C 11.3880615234375 296.5718383789062 14.275634765625 298.5187683105469 17.49072265625 299.8786010742188 C 20.81866455078125 301.2862243652344 24.35455322265625 302 28 302 L 310.2183227539062 302 C 310.5608825683594 300.5238647460938 311.4173278808594 297.1082763671875 312.9676208496094 292.5234680175781 C 314.8636169433594 286.9164733886719 318.1974487304688 278.4544677734375 323.3129272460938 269.9830932617188 C 336.3426208496094 248.4053802490234 354.6228332519531 237 376.1771545410156 237 L 597 237 C 600.6454467773438 237 604.1813354492188 236.2862243652344 607.50927734375 234.8786163330078 C 610.724365234375 233.5187683105469 613.6119384765625 231.5718383789062 616.0919189453125 229.0919189453125 C 618.5718383789062 226.6119232177734 620.518798828125 223.7243957519531 621.8786010742188 220.5093078613281 C 623.2862548828125 217.1813049316406 624 213.6454620361328 624 210 L 624 28 C 624 24.35455322265625 623.2862548828125 20.81869506835938 621.8786010742188 17.49069213867188 C 620.518798828125 14.27560424804688 618.5718383789062 11.38809204101562 616.0919189453125 8.9080810546875 C 613.6119384765625 6.42816162109375 610.724365234375 4.481231689453125 607.50927734375 3.12139892578125 C 604.1813354492188 1.713775634765625 600.6454467773438 1 597 1 L 28 1 M 28 0 L 597 0 C 612.4639892578125 0 625 12.5360107421875 625 28 L 625 210 C 625 225.4639892578125 612.4639892578125 238 597 238 C 597 238 427.9899291992188 238 376.1771545410156 238 C 324.3643188476562 238 311.0203857421875 303 311.0203857421875 303 L 28 303 C 12.5360107421875 303 0 290.4639892578125 0 275 L 0 28 C 0 12.5360107421875 12.5360107421875 0 28 0 Z" stroke="none" fill="#fff"/>
        </g>
      </g>
      <g data-type="innerShadowGroup">
        <text id="ativa_Invest-2" data-name="ativa Invest" transform="translate(591 418)" fill="#e2e2e2" fontSize="33" fontFamily="SegoeUI, Segoe UI"><tspan x="-81.227" y="0">Ativa Invest</tspan></text>
        <g transform="matrix(1, 0, 0, 1, 409.5, 83.5)" filter="url(#ativa_Invest)">
          <text id="ativa_Invest-3" data-name="ativa Invest" transform="translate(181.5 334.5)" fill="#fff" fontSize="33" fontFamily="SegoeUI, Segoe UI"><tspan x="-81.227" y="0">Ativa Invest</tspan></text>
        </g>
      </g>
      <g id="Rectangle_17" data-name="Rectangle 17" transform="translate(742 206)" fill="#fff" stroke="#dfdfdf" strokeWidth="1">
        <foreignObject x="0" y="0" width="329" height="43">
          <input type="text" style={{ width: '100%', height: '100%', padding: '5px', border:'none'  }} placeholder="CPF ou CNPJ" />
        </foreignObject>
        <rect x="0.5" y="0.5" width="328" height="42" rx="8.5" fill="none"/>
      </g>
      <g id="Rectangle_18" data-name="Rectangle 18" transform="translate(742 278)" fill="#fff" stroke="#dfdfdf" strokeWidth="1">
        <foreignObject x="0" y="0" width="329" height="43">
          <input type="text" style={{ width: '100%', height: '100%', padding: '5px', border:'none'  }} placeholder="numero de whatsApp" />
        </foreignObject>
        <rect x="0.5" y="0.5" width="328" height="45" rx="8.5" fill="none"/>
      </g>
      <text id="Informe_seu_CPF_ou_CNPJ" data-name="Informe seu CPF ou CNPJ" transform="translate(836 202)" fontSize="17" fontFamily="SegoeUI, Segoe UI"><tspan x="-94.455" y="0">Informe seu CPF ou CNPJ</tspan></text>
      <text id="Seu_n_umero_de_WhatsApp" data-name="Seu numero de WhatsApp" transform="translate(843 274)" fontSize="17" fontFamily="SegoeUI, Segoe UI"><tspan x="-101.133" y="0">Seu número de WhatsApp</tspan></text>
    </g>
    <g id="Group_buttonAvancar" style={{cursor:'pointer'}} onClick={animaForm1}>
      <g id="Group_5" data-name="Group 5" transform="translate(0 -249)">
        <g transform="matrix(1, 0, 0, 1, 409.5, 332.5)" filter="url(#Rectangle_19)">
          <rect id="Rectangle_19-2" data-name="Rectangle 19" width="260" height="80" rx="40" transform="translate(418.5 312.5)" fill="#B8E500"/>
        </g>
        <text id="Avancar" transform="translate(958 682)" fill="#fff" fontSize="34" fontFamily="SegoeUI, Segoe UI"><tspan x="-59.458" y="0">Avançar</tspan></text>
        <text id="na_ativa_Invest" data-name="na ativa Invest" transform="translate(958 706)" fill="#fff" fontSize="14" fontFamily="SegoeUI, Segoe UI"><tspan x="-43.9" y="0">na Ativa Invest</tspan></text>
      </g>
    </g>

    <text id="Emprestar_dinheiro_em_3_etapas_rapidas:" data-name="Emprestar dinheiro em 3 etapas rapidas:" transform="translate(796 127)" fill="#002b57" fontSize="33" fontFamily="SegoeUI, Segoe UI"><tspan x="-310.327" y="0">Cadastre-se e ative seu sucesso financeiro:</tspan></text>

  </g>
</svg>


    </div>
  );
}

export default App;
