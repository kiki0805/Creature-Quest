package audioHandler;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.dooboolab.audiorecorderplayer.RNAudioRecorderPlayerPackage;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class AudioHandler extends ReactContextBaseJavaModule {
    AudioHandler(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "AudioHandler";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
    }
}
