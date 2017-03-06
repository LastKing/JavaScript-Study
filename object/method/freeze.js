function DetectorBase(configs) {
  if (!this instanceof DetectorBase) {
    throw new Error('Do not invoke without new.');
  }
  this.configs = configs;
  this.analyze();
}

DetectorBase.prototype.detect = function () {
  throw new Error('Not implemented');
};

DetectorBase.prototype.analyze = function () {
  console.log('analyze....');
  this.data = "###data###";
};

function LinkDetector(links) {
  if (!this instanceof LinkDetector) {
    throw new Error('Do not invoke without new.');
  }
  this.links = links;
  DetectorBase.apply(this, arguments);
}

function ContainerDetector(containers) {
  if (!this instanceof ContainerDetector) {
    throw new Error('Do not invoke without new.');
  }
  this.containers = containers;
  DetectorBase.apply(this, arguments);
}

inherit(LinkDetector, DetectorBase);
inherit(ContainerDetector, DetectorBase);

LinkDetector.prototype.detect = function () {
  console.log('Loading data' + this.data);
  console.log('Link detection started.');
  console.log('Scaning links:' + this.links);
};

ContainerDetector.prototype.detect = function () {
  console.log('Loding data' + this.data);
  console.log('Container detection started.');
  console.log('Scaning containers.' + this.containers);
};

Object.freeze(DetectorBase);
Object.freeze(DetectorBase.prototype);
Object.freeze(LinkDetector);
Object.freeze(LinkDetector.prototype);
Object.freeze(ContainerDetector);
Object.freeze(ContainerDetector.prototype);

Object.defineProperties(global, {
  LinkDetector: {value: LinkDetector},
  ContainerDetector: {value: ContainerDetector},
  DetectorBase: {value: DetectorBase}
});

function inherit(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
}

var cd = new ContainerDetector('#abc #def #ghi');
var ld = new LinkDetector('http:www.taobao.com http://www.tmall.com');

cd.detect();
ld.detect();
