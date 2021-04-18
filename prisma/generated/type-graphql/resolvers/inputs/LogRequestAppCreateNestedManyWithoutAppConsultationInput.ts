import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAppCreateOrConnectWithoutAppConsultationInput } from "../inputs/LogRequestAppCreateOrConnectWithoutAppConsultationInput";
import { LogRequestAppCreateWithoutAppConsultationInput } from "../inputs/LogRequestAppCreateWithoutAppConsultationInput";
import { LogRequestAppWhereUniqueInput } from "../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppCreateNestedManyWithoutAppConsultationInput {
  @TypeGraphQL.Field(_type => [LogRequestAppCreateWithoutAppConsultationInput], {
    nullable: true
  })
  create?: LogRequestAppCreateWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppCreateOrConnectWithoutAppConsultationInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestAppCreateOrConnectWithoutAppConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestAppWhereUniqueInput[] | undefined;
}
