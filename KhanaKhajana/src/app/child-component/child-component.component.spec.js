"use strict";
var testing_1 = require("@angular/core/testing");
var child_component_component_1 = require("./child-component.component");
describe('ChildComponentComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [child_component_component_1.ChildComponentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(child_component_component_1.ChildComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=child-component.component.spec.js.map