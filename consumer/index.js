console.log('consumer..');
import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';


const consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': '192.168.6.51:9093' 
}, {});

consumer.connect();

consumer.on('ready', () => {
    console.log('consumer ready..')
    consumer.subscribe(['restapi']);
    consumer.consume();
}).on('data', (data) => {
    console.log(`received message: ${eventType.fromBuffer(data.value)}`);
});