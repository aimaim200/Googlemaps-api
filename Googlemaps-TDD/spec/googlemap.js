 describe('drawMap', function () {
            // mock google API
            beforeEach(function () {
                this.googleBefore = window.google;
                window.google = {
                    maps: {
                        LatLng: jasmine.createSpy('LatLng'),
                        MapTypeId: {},
                        Map: jasmine.createSpy('Map'),
                        Marker: jasmine.createSpy('Marker'),
                        InfoWindow: jasmine.createSpy('InfoWindow'),
                        event: {
                            addListener: jasmine.createSpy('addListener')
                        }
                    }
                };
            });

            afterEach(function () {
                window.google = this.googleBefore;
            });

            describe('when invoked', function () {
                beforeEach(function () {
                    this.myMap = document.createElement('div');
                    this.myMap.id = 'my-map';
                    document.body.appendChild(this.myMap);
                    drawMap();
                });

                afterEach(function () {
                    this.myMap.remove();
                });

                it('should pass the correct coordinates', function () {
                    expect(google.maps.LatLng.calls.first().args).toEqual([51.5011619,-0.1423084]);
                })

                it('should create the map in #my-map', function () {
                    expect(google.maps.Map).toHaveBeenCalledWith(this.myMap, {
                        'center': google.maps.LatLng.calls.first().object,
                        'zoom': 12,
                        'mapTypeId': google.maps.MapTypeId.ROADMAP,
                        'draggable': true
                    });
                });

            });
        });