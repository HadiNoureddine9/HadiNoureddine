const Icons = require('react-icons/lu');
console.log('Checking icons...');

const check = (name) => console.log(`${name}:`, !!Icons[name]);

check('LuCloud');
check('LuDatabase');
check('LuBarChart3');
check('LuClock');
check('LuVideo');
check('LuGitBranch');
check('LuBox');
check('LuActivity');
check('LuArrowRight');
check('LuCalendar');

console.log('--- Search "chart" ---');
Object.keys(Icons).forEach(k => {
    if (k.toLowerCase().includes('chart')) console.log(k);
});
