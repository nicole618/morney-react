import React from 'react';
import classnames from 'classnames';

//require引入文件夹
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name?: string
}& React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
  const {name,children,className,...reset}=props;
  return (
    <svg className={classnames('icon',className)} {...reset}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};

export default Icon;