describe('index', () => {
    let AppRegistry;

    beforeEach(() => {
        AppRegistry = require('react-native').AppRegistry;
        AppRegistry.registerComponent = jest.fn();

        require('../index');
    });

    it('should register the component', () => {
        expect(AppRegistry.registerComponent).toHaveBeenCalledTimes(1);
        expect(AppRegistry.registerComponent).toHaveBeenCalledWith('spades', expect.any(Function));
    });
});
