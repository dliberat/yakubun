const expect = require('chai').expect;
import compareTimes from '../../src/checks/time/time';

describe('compareTimes', function(){
    it('use data from the clean strings if available, or from regular source/target if not', function(){
        var source = '試合は23時からです。';
        var target = 'The match starts at 21:00.';
        var acc = {
            timeCheck_clean_source: '試合は2時からです。',
            timeCheck_clean_target: 'The match starts at 2:00'
        }
        const [res] = compareTimes(source, target, {}, acc);
        expect(res.hasError).to.equal(false);
        
        const [noAcc] = compareTimes(source, target, {}, {});
        expect(noAcc.hasError).to.equal(true);
    });
    it('parse times in 24 hour clock format (ignoring am/pm)', function(){
       var source = '13時24分';
       var target = '1:24pm';
       const [res] = compareTimes(source, target);
       expect(res.HTML).to.equal('Times: Found <span class="text-time">13:24</span> in source and <span class="text-time">1:24</span> in target.')
    });
    it('recognize both regular times (14:00) and kanji times (15時) in JP', function(){
        var source = 'イベントは14:00から15時までだ';
        var target = 'the event runs  from 14:01 to 15:01';
        const [res] = compareTimes(source, target);
        expect(res.HTML).to.equal('Times: Found <span class="text-time">14:00, 15:00</span> in source and <span class="text-time">14:01, 15:01</span> in target.')
    });
    it('return clean strings in accumulator', function(){
        var source = '私は毎日22時３０分に寝る。';
        var target = 'I go to bed at 22:30 every night.';
        const [res, acc] = compareTimes(source, target);
        expect(acc.timeCheck_clean_source).to.equal('私は毎日{22:30}に寝る。');
        expect(acc.timeCheck_clean_target).to.equal('I go to bed at {22:30} every night.');
    });
    it('6:00～23:59 matches From 6:00 to 23:59 (GMT+9)', function(){
        const source = '（6:00～23:59）';
        const target = 'From 6:00 to 23:59 (GMT+9)';
        const [res, acc] = compareTimes(source, target);
        expect(acc.timeCheck_clean_source).to.equal('（{06:00}～{23:59}）');
    });
})