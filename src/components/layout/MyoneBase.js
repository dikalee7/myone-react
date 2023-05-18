import React, { useContext } from 'react';
import { AppContext } from 'App';
import useEmitter from 'composables/utils/emitter';
import useMo from 'composables/utils/mo';

const MyoneBase = (InputComponent, componentName) => {
  // const { $loading } = useContext(AppContext);
  // const [state] = $loading;
  // console.log('MyoneBase state===>', state);

  const $emitter = useEmitter();
  const $mo = useMo($emitter);

  return class OutputComponent extends React.Component {
    static contextType = AppContext;
    componentDidMount() {
      console.log(this.props.context);
      console.log(`${this.context}, ${componentName} 컴포넌트가 마운트됨`);
    }
    render() {
      return <InputComponent {...this.props} />;
    }
  };
};

export default MyoneBase;
