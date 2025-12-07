const Icons = require('react-icons/lu');
console.log('Checking icons...');
try {
    console.log('LuBarChart3:', !!Icons.LuBarChart3);
} catch (e) {
    console.log('LuBarChart3 error');
}

Object.keys(Icons).forEach(k => {
    if (k.toLowerCase().includes('barchart')) console.log('Found similar to barchart:', k);
    if (k.toLowerCase().includes('cloud')) console.log('Found similar to cloud:', k);
});
