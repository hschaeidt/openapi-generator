package org.openapitools.codegen.languages;

import org.openapitools.codegen.*;
import java.io.File;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class NodejsHapiServerCodegen extends AbstractTypeScriptClientCodegen {
    public static final String PROJECT_NAME = "projectName";

    static final Logger LOGGER = LoggerFactory.getLogger(NodejsHapiServerCodegen.class);

    public CodegenType getTag() {
        return CodegenType.SERVER;
    }

    public String getName() {
        return "nodejs-hapi";
    }

    public String getHelp() {
        return "Generates a nodejs-hapi server.";
    }

    public NodejsHapiServerCodegen() {
        super();

        // START overrides from parent
        // An additional suffix is too verbose
        enumSuffix = "";
        // END overrides from parent

        outputFolder = "generated-code" + File.separator + "nodejs-hapi";
        modelTemplateFiles.put("model.mustache", ".ts");
        apiTemplateFiles.put("api.mustache", ".ts");
        embeddedTemplateDir = templateDir = "nodejs-hapi";
        apiPackage = "apis";
        modelPackage = "models";
        supportingFiles.add(new SupportingFile("README.mustache", "", "README.md"));
        supportingFiles.add(new SupportingFile("tsconfig.mustache", "", "tsconfig.json"));
        supportingFiles.add(new SupportingFile("package.mustache", "", "package.json"));
    }

    @Override
    public String toModelImport(String name) {
        return modelPackage() + File.separator + name;
    }

    @Override
    public String apiFileFolder() {
        return outputFolder + File.separator + "src" + File.separator + apiPackage;
    }

    @Override
    public String modelFileFolder() {
        return outputFolder + File.separator + "src" + File.separator + modelPackage;
    }
}
