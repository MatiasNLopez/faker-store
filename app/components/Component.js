export const Component = (function () {
    /** 
     * @name Component Constructor 
     * @param {String} element elemento donde se redenriza el template. 
     * @param {object} initalState estado inicial del componente
     * @param {function} template estructura html del componente
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
    }
     *  
     * */  
    const Constructor = function(props){
        this.element = props.element;
        /* this.data = props.data; */
        this.initialState = props.initialState || {};
        this.template = props.template
    }

     /** 
      * @name render - renderiza el template
     *  @return Renderiza el template en el elemento (this.element) 
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
      * @name renderAsync- renderiza el template de forma asincrona 
     *  @return Renderiza el template en el elemento (this.element) 
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
      * @name setState - Esta funcion cambia el estado
     *  @param state nuevo estado
     *  @returns void
    }
     *  
     * */  
    Constructor.prototype.setState = function(state){
        for(key in state){
            if(this.initialState.hasOwnProperty(key))
                this.initialState[key] = state[key]
        }
    }

    
    /** 
        * @name getState - Esta funcion devuelve una copia del estado
        * @returns copy this.initialState
    }
    *  
    * */  
    Constructor.prototype.getState = function(){
        return JSON.parse(JSON.stringify(this.initialState))
    }

    /** 
        * @name clearTemplate - Esta funcion devuelve el template vacio
        * @returns template empty
    }
    *  
    * */  
    Constructor.prototype.clearTemplate = function(){
        this.template = function(){
            return ""
        };
    }

     /** 
        * @name setTemplate - Esta funcion cambia el template html del componente
        
    }
    *  
    * */  
    Constructor.prototype.setTemplate = function(template){
        this.template = function(props) {
            return template
        }
        
    }
    
    /** 
        * @name getTemplate - Esta funcion devuelve el template html del componente
        * @returns this.template
    }
    *  
    * */  
    Constructor.prototype.getTemplate = function(){
        return this.template
    }

    Constructor.prototype.getTemplateHTML = function(){
        return this.template(this.initialState)
    }

    return Constructor;
})()