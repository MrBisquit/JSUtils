/**
 * 
 */

function $(obj, [html = false]) {
    if(typeof obj == "string") {
        obj.trim();
        switch (obj[0]) {
            case "#":
                obj.slice(0, 1);
                return new $obj({
                    object : document.getElementById(obj)
                });
                break;
            case ".":
                obj.slice(0, 1);
                return new $obj({
                    object : document.getElementsByClassName(obj)[0]
                });
                break;
            default:
                throw new Error(`Cannot find specified selector: ${obj[0]} in string ${obj}`);
                break;
        }
    }
}

class $obj {
    el = null;
    exists = false;

    constructor(contents) {
        el = contents["object"] || null;
        this.exists();
    }

    exists = () => {
        this.exists = utils.checkExists(el);
        return this.exists;
    }
}

const utils = {
    checkExists : (value) => {
        return value != null && value != undefined && value != "";
    }
}