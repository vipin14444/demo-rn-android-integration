package com.example.integratedrnandroidproject

import android.app.Application
import com.facebook.react.*
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.microsoft.codepush.react.CodePush


class MainApplication : Application(), ReactApplication {
    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)
    }

    private val reactNativeHost =
        object : DefaultReactNativeHost(this) {
            override fun getUseDeveloperSupport() = BuildConfig.DEBUG
            override fun getPackages(): List<ReactPackage> {
                val packages = PackageList(this).getPackages().toMutableList()
                // Packages that cannot be autolinked yet can be added manually here
                return packages
            }

            override fun getJSMainModuleName(): String {
                return "index"
            }

            override fun getJSBundleFile(): String? {
                return CodePush.getJSBundleFile()
            }
        }

    override fun getReactNativeHost(): ReactNativeHost = reactNativeHost
}