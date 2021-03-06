import React, { PureComponent } from 'react';
import { DashboardModel } from '../../state/DashboardModel';
import { AngularComponent, getAngularLoader } from '@grafana/runtime';

interface Props {
  dashboard: DashboardModel;
}

export class LinksSettings extends PureComponent<Props> {
  element?: HTMLElement | null;
  angularCmp?: AngularComponent;

  componentDidMount() {
    const loader = getAngularLoader();

    const template = '<dash-links-editor dashboard="dashboard" />';
    const scopeProps = { dashboard: this.props.dashboard };
    this.angularCmp = loader.load(this.element, scopeProps, template);
  }

  componentWillUnmount() {
    if (this.angularCmp) {
      this.angularCmp.destroy();
    }
  }

  render() {
    return <div ref={ref => (this.element = ref)} />;
  }
}
