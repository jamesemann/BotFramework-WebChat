import { IBotConnection, EventActivity, Message, Activity, ConnectionStatus, DirectLineOptions } from 'botframework-directlinejs';

import { AjaxResponse, AjaxRequest } from 'rxjs/observable/dom/AjaxObservable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/take';

import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

export class HumanInTheLoopBotConnection implements IBotConnection {
    public connectionStatus$ = new BehaviorSubject(ConnectionStatus.Online);
    public activity$: Observable<Activity>;
    public referenceGrammarId: string = 'bob';

    constructor() {
        var x = ['this is a message', 'this is another', 'this is a third']
        this.activity$ = Observable.create(function (observer: any) {
            for (let l in x) {
                var a: Message = { id: l, type: 'message', from: { id: "1", name: 'the user' }, channelId: '1', conversation: { id: '1' }, text: '' + l, timestamp: new Date().toUTCString() };
                observer.next(a);
            }
        });
    }

    end() {
        console.log('end');
    }

    postActivity(activity: Activity) {
        console.log(activity);
        return Observable.of('');
    }
}

