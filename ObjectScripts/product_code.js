const partCode1 = 'XYZ:1234-L';

const part1 = parsePartCode(partCode1);
console.log(part1);

function parsePartCode(partCode) {
    
    const colonPos = partCode.indexOf(':');
    const thisSupplierCode = partCode.substring(0, colonPos);
    return{
        supplierCode: thisSupplierCode,
        productNumber:
        size: 
    }
}