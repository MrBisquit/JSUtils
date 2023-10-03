/**
 * 
 */

/**
 * (Error position ID: CREATE_$_OBJ)
 */
function $(obj, html = false) {
    var el = null;
    var c = null

    if(typeof obj == "string") {
        obj.trim();
        switch (obj[0]) {
            case "#":
                //obj.slice(0, 1);
                obj = obj.replace("#", "")
                console.log(obj);
                el = document.getElementById(obj);
                c = new $obj(el, {
                    object : document.getElementById(obj)
                });
                break;
            case ".":
                obj.slice(0, 1);
                el = document.getElementsByClassName(obj)[0];
                c = new $obj(el, {
                    object : document.getElementsByClassName(obj)[0]
                });
                break;
            default:
                //throw new Error(`Cannot find specified selector: ${obj[0]} in string ${obj}`);
                utils.startError({ position : "CREATE_$_OBJ", code : "UNKNOWN_SELECTOR", message : `Cannot find specified selector: ${obj[0]} in string ${obj}` });
                break;
        }
    }

    if(html) {
        return el;
    } else {
        return c;
    }
}

class $obj {
    el = null;
    exists = false;

    constructor(element, contents) {
        console.log(contents);
        this.el = element || undefined;
        this.exists();
    }

    exists = () => {
        this.exists = utils.checkExists(this.el);
        return this.exists;
    }

    toHTML = () => {
        return $(this.el, true);
    }
}

const utils = {
    checkExists : (value) => {
        return value != null && value != undefined && value != "";
    },

    startError : (error) => {
        throw new Error(`JSUtils Error at ${error.position}: ${error.code}: ${error.message}`);
    }
}