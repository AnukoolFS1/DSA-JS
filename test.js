function update(val){
    this.status = val
}

let obj = {
    status: "abc",
    update
}

obj.update("xyz")

console.log(obj)