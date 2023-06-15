export const Component = (function () {
    /** 
     * @name Component Constructor 
     * @param {String} element element where the component template is rendered. 
     * @param {object} initalState component initial state.
     * @param {function} template component html structure. 
     * @param {function} event component events actions. (the function must be asynchronous)
     * @returns {Constructor} 
     * @example new component({
        element: "#root",
        initialState: { 
            session: {}
        },
        template: function(props) {
            return `
                <main id="main" class="main"></main>`
        })
        event: async function(props) {
            const el = document.querySelector(".product-card *");
            const postId = el.closest('.product-card').getAttribute("data-id");
            localStorage.setItem('post-id',postId);
            window.location.hash = `${_const.routes.product}${postId}`;
        })
    }
     *  
     * */  
    const Constructor = function(props){
        this.element = props.element;
        this.initialState = props.initialState;
        this.template = props.template;
        this.event = props.event;
    }

     /** 
      * @function render - render the template 
     *  @return Renders the template on the element (this.element) 
    }
     *  
     * */  
    Constructor.prototype.render = function(){
        
        if(!this.element) return;
        
        const $el = document.querySelector(this.element);
        if(!$el) return;
        
        $el.innerHTML += this.template(this.initialState);
       
    }

    /** 
      * @function renderAsync- asynchronously render the template 
     *  @return Renders the template asynchronously on the element (this.element)
    }
     *  
     * */  
    Constructor.prototype.renderAsync = async function(){
        
        if(!this.element) return;
        
        const $el = document.querySelector(this.element);
        if(!$el) return;
        
        $el.innerHTML += await this.template(this.initialState);
    }

     /** 
      * @function setState - This function changes the state 
     *  @param state new component state
     *  @returns void
    }
     *  
     * */  
    Constructor.prototype.setState = function(state){
        for(let key in state){
            if(this.initialState.hasOwnProperty(key))
                this.initialState[key] = state[key]
        }
    }

    
    /** 
        * @function getState - This function returns a copy of the state
        * @returns copy this.initialState
    }
    *  
    * */  
    Constructor.prototype.getState = function(){
        return JSON.parse(JSON.stringify(this.initialState))
    }

    /** 
        * @function clearTemplate - this function clears the template
        * @returns returns the empty template
    }
    *  
    * */  
    Constructor.prototype.clearTemplate = function(){
        this.template = function(){
            return ""
        };
    }

     /** 
        * @function setTemplate - This function replaces the html template of the component
        * @returns void
    }
    *  
    * */  
    Constructor.prototype.setTemplate = function(newTemplate){
        this.template = newTemplate
        
    }
    
    /** 
        * @function getTemplate - This function returns the template of the component
        * @returns this.template
    }
    *  
    * */  
    Constructor.prototype.getTemplate = function(){
        return this.template
    }
    /**
     * @function getTemplateHTML This function returns the template of the component in html
     * @returns this.template(this.initialState)
     */
    Constructor.prototype.getTemplateHTML = function(){
        return this.template(this.initialState)
    }

    /**
     * @function getEvent This function returns component events synchronously
     * @returns this.event()
     */
    Constructor.prototype.getEvent = async function(){
        return await this.event();
    }

    /**
     * @function setElement This function replaces the element where the template is rendered
     * @returns void
     */
    Constructor.prototype.setElement = function(element){
        this.element = element;
    }

    return Constructor;
})()