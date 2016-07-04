const classnames = require("classnames");

const FeatureSet = require("../../../components.content/detail/FeatureSet");

// Detail pane tab for FeatureSet information.
const FeatureSetDetailPaneView = ({
    featureSets
}) => {
    return (
        <ul>
        {
            _.map(_.sortBy(featureSets, "renderOrder").reverse(), (set) => {
                return (
                    <li key={set.id}>
                        <FeatureSet featureSet={set} showChildFeatures={false} />
                    </li>
                );
            })
        }
        </ul>
    );
}

module.exports = FeatureSetDetailPaneView;