import {default as Component}    from '../../../src/component/Base.mjs';
import HeaderContainer           from './HeaderContainer.mjs';
import {default as TabContainer} from '../../../src/tab/Container.mjs';
import Viewport                  from '../../../src/container/Viewport.mjs';

/**
 * @class Website.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.MainContainer'
         * @protected
         */
        className: 'Website.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Array} items
         */
        items: [{
            module: HeaderContainer
        }, {
            module: TabContainer,
            flex  : 1,
            style : {margin: '20px'},

            itemDefaults: {
                module: Component,
                cls   : ['neo-examples-tab-component'],
                style : {padding: '20px'},
            },

            items: [{
                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Home'
                },
                vdom: {innerHTML: 'Amazing text to describe neo.mjs'}
            }, {
                tabButtonConfig: {
                    iconCls: 'fa fa-play-circle',
                    text   : 'Blog'
                },
                vdom: {innerHTML: 'Blog'}
            }, {
                tabButtonConfig: {
                    iconCls: 'fa fa-images',
                    text   : 'Examples'
                },
                vdom: {innerHTML: 'Examples'}
            }, {
                tabButtonConfig: {
                    iconCls: 'fa fa-table',
                    text   : 'Docs'
                },
                vdom: {innerHTML: 'Docs'}
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};