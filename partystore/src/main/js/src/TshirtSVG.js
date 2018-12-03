import React from 'react';

export class TshirtSVG extends React.Component{

	constructor(props){
		super(props);
	}

	render() {

		const svgString = `<svg
			 xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;" i:viewOrigin="201.7651 489.9663" i:rulerOrigin="0 0" i:pageBounds="0 841.8896 595.2754 0"
			 xmlns="&ns_svg;" xmlns:xlink="&ns_xlink;" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
			 width="500" height="500" viewBox="0 0 194.154 183.017" overflow="visible" enable-background="new 0 0 194.154 183.017"
			 xml:space="preserve">
			<metadata>
				<variableSets  xmlns="&ns_vars;">
					<variableSet  varSetName="binding1" locked="none">
						<variables></variables>
						<v:sampleDataSets  xmlns="&ns_custom;" xmlns:v="&ns_vars;"></v:sampleDataSets>
					</variableSet>
				</variableSets>
				<sfw  xmlns="&ns_sfw;">
					<slices></slices>
					<sliceSourceBounds  y="306.949" x="201.765" width="194.154" height="183.017" bottomLeftOrigin="true"></sliceSourceBounds>
				</sfw>
			</metadata>
			<switch>
				<foreignObject requiredExtensions="&ns_ai;" x="0" y="0" width="1" height="1">
					<i:pgfRef  xlink:href="#adobe_illustrator_pgf">
					</i:pgfRef>
				</foreignObject>
				<g i:extraneous="self">
					<g id="Calque_1" i:layer="yes" i:dimmedPercent="50" i:rgbTrio="#4F008000FFFF">
						<path i:knockout="Off" fill=${this.props.color} stroke="#000000" stroke-width="2" d="M117.746,0.994c-6.623,0-12.118,3.051-20.668,3.051
							c-8.55,0-16.106-3.05-20.668-3.05c-0.684,0-1.265,0.058-1.76,0.172C29.346,10.081,1.242,30.671,1.242,30.671l14.393,32.296
							c9.485,1.026,19.661,5.333,20.393,8.836c0.633,3.029,2.421,25.392,2.309,48.861c-0.108,22.705-2.091,50.469-4.452,61.353h63.193
							h63.192c-2.359-10.884-4.343-38.647-4.451-61.353c-0.112-23.47,1.676-45.832,2.309-48.861
							c0.733-3.503,10.908-7.811,20.394-8.836l14.393-32.296c0,0-27.66-20.465-72.963-29.378
							C119.951,1.292,118.646,0.994,117.746,0.994z"/>
						<path i:knockout="Off" fill="none" stroke="#000000" stroke-width="2" d="M74.648,1.167c-2.544,0.588-2.795,2.667-2.795,6.036
							c0,10.417,11.293,23.468,25.225,23.468c13.931,0,25.225-13.051,25.225-23.468c0-3.161-0.221-5.187-2.352-5.911"/>
						<path i:knockout="Off" fill="none" stroke="#000000" d="M188.627,27.801l-16.136,36.486"/>
						<path i:knockout="Off" fill="none" stroke="#000000" d="M159.336,176.205H34.866"/>
						<path i:knockout="Off" fill="none" stroke="#000000" d="M5.774,27.692l16.793,36.557"/>
					</g>
				</g>
			</switch>
			<i:pgf  id="adobe_illustrator_pgf">

			</i:pgf>
		</svg>`;
		return(
			<div dangerouslySetInnerHTML={{ __html: svgString }} style={{width:'500px', height:'500px'}}>
			</div>
		);
	}

}
