import React from 'react';

export class StyledRoundNeck extends React.Component{

	constructor(props){
		super(props);
	}

	render() {
    const svgString = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 500.144 500.144" style="enable-background:new 0 0 500.144 500.144;" xml:space="preserve">
<g>
	<g>
		<path fill=${this.props.color} d="M463.768,116.232c-9.688-30.68-32.52-54.76-62.648-66.056l-81.296-30.488l-8.808-17.616H189.128l-8.808,17.616
			l-81.296,30.48c-30.128,11.304-52.96,35.376-62.648,66.056L0,231.408l95.44,28.632l18.632-62.128v300.16h272v-300.16l18.632,62.12
			l95.44-28.632L463.768,116.232z M306.816,29.448l18.616,43.44l-59-5.36l37.816-43.216L306.816,29.448z M288.432,18.072
			l-38.36,43.848l-38.368-43.848H288.432z M258.072,82.832v79.24h-16v-79.24l8-0.728L258.072,82.832z M193.328,29.448l2.568-5.136
			l37.816,43.216l-59,5.36L193.328,29.448z M370.072,482.072h-240v-80h240V482.072z M370.072,386.072h-240v-24h240V386.072z
			 M370.072,346.072h-240v-24h240V346.072z M392.024,162.072h-21.952v144h-240v-144H108.12l-23.416,78.04l-64.56-19.368
			l5.808-18.384l53.928,15.408l4.392-15.384l-53.496-15.288l20.856-66.048c8.2-25.96,27.52-46.336,53.024-55.896l66.688-25.016
			L149.44,91.248l76.632-6.96v93.784h48V84.288l76.64,6.968l-21.904-51.112l66.688,25.016C421,74.72,440.32,95.096,448.52,121.056
			l20.856,66.048l-53.496,15.288l4.392,15.384l53.928-15.408l5.808,18.384l-64.56,19.368L392.024,162.072z"/>
	</g>
</g>
</svg>`;
    return(
      <div dangerouslySetInnerHTML={{ __html: svgString }} style={{width:'500px', height:'500px'}}>
      </div>
    );
  }
}