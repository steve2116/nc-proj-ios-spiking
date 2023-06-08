export default function Ar() {
    return (
      <main>
        <a-scene
          vr-mode-ui="enabled: false"
          arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
        >
          <a-box
            material="color: red;"
            scale="5 5 5"
            gps-entity-place="latitude: 51.112224; longitude: -4.175430;"
          ></a-box>
          <a-box
            material="color: green;"
            scale="5 5 5"
            gps-entity-place="latitude: 51.112351; longitude: -4.174846;"
          ></a-box>
          <a-box
            material="color: yellow;"
            scale="5 5 5"
            gps-entity-place="latitude: 51.109173; longitude: -4.224593;"
          ></a-box>
          <a-camera gps-camera rotation-reader>
            {' '}
          </a-camera>
        </a-scene>
      </main>
    );
}